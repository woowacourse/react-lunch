import mockData from '../data/mockData.json';
import { Restaurant, State } from './type';

const { restaurantList } = mockData as { restaurantList: Restaurant[] };

const initialState: State = {
  category: '전체',
  sort: '이름순',
  isModalOpen: false,
  modalId: '1',
  restaurantList: restaurantList as Restaurant[],
};

export default initialState;
