import { Computer } from '@@types/computer';
import clientServices from '../clientServices';

async function getAllComputers(): Promise<Computer[]> {
  return clientServices.get('/computers/list').then((result) => result?.data || []);
}

const computersAPI = {
  getAllComputers,
};
export default computersAPI;
