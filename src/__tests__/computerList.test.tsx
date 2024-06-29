import { render, screen, waitFor, cleanup, act } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from '@@pages/index';

const mockData = {
  statusCode: 200,
  message: 'Successfully retrieved the contacts list',
  data: [
    {
      id: 1,
      type: 'prebuilt',
      name: 'Creator RDY Y40BG201',
      os: 'Windows 11 Pro',
      cpu: 'Intel® Core™ i9-13900KF CPU',
      gpu: 'GeForce RTX 4090 - 24GB',
      storage: '2TB M.2 NVMe GEN4 SSD',
      ram: '32GB DDR5-6000MHz RGB RAM',
      price: 3549,
      oldPrice: 3999,
      button: 'Buy Now',
      startingAt: 172.07,
      image: '/images/gaming-pc-01-Y70-VCTA-B002-MainSolo-400.avif',
    },
  ],
};

describe('Home Page with mocked getAllContacts', () => {
  beforeAll(() => {
    jest.mock('@@src/apis/clients/computersAPI', () => ({
      ...jest.requireActual('@@src/apis/clients/computersAPI'),
      getAllContacts: jest.fn().mockResolvedValue(mockData),
    }));
  });

  beforeEach(() => {
    const queryClient = new QueryClient();
    act(() => {
      render(
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      );
    });
  });

  afterEach(cleanup);

  test('renders product names from API', async () => {
    await waitFor(() => expect(screen.getByText('Prebuilt PC')).toBeInTheDocument(), {
      timeout: 5000,
    });
    mockData.data.forEach((product) => {
      const fullName = `${product.name}`;
      expect(screen.getByText(fullName)).toBeInTheDocument();
    });
  });
});
