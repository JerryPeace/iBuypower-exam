import { Computer } from '@@types/computer';
import { render, screen } from '@testing-library/react';
import Slider from './index';

const computers: Computer[] = [
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
  {
    id: 2,
    type: 'custom',
    name: 'Gaming RDY SLMRG211',
    os: 'Windows 11 Home',
    cpu: 'AMD Ryzen 7 7700X CPU',
    gpu: 'GeForce RTX 4070 - 12GB',
    storage: '1TB M.2 NVMe SSD',
    ram: '32GB DDR5-5600MHz RGB RAM',
    price: 1799,
    oldPrice: 1999,
    button: 'Buy Now',
    startingAt: 87.22,
    image: '/images/gaming-pc-01-Y70-VCTA-B002-MainSolo-400.avif',
  },
];

describe('Slider', () => {
  it('displays the correct computer name on each slide', () => {
    render(<Slider data={computers} />);
    computers.forEach((computer) => {
      const slideElement = screen.getByText(computer.name);
      expect(slideElement).toBeInTheDocument();
    });
  });

  it('displays the correct computer price on each slide', () => {
    render(<Slider data={computers} />);
    computers.forEach((computer) => {
      const slideElement = screen.getByText(`$${computer.price}`);
      expect(slideElement).toBeInTheDocument();
    });
  });

  it('displays the correct computer type on each slide', () => {
    render(<Slider data={computers} />);
    computers.forEach((computer) => {
      const type = computer.type === 'prebuilt' ? 'Prebuilt PC' : 'Custom PC'
      const slideElement = screen.getByText(type);
      expect(slideElement).toBeInTheDocument();
    });
  });

  it('displays the correct computer image on each slide', () => {
    render(<Slider data={computers} />);
    computers.forEach((computer) => {
      const slideElement = screen.getByAltText(computer.name);
      expect(slideElement).toBeInTheDocument();
    });
  });
});
