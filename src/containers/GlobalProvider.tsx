import { createContext } from 'react';
import mockData from '../data/mockData.json';
import { AppState } from '../types/Restaurant';

interface GlobalState {
  state: AppState;
  setState: Function;
}

export const RestaurantContext = createContext<GlobalState>({
  state: {
    restaurants: mockData,
    modalOpen: false,
    modalInfo: {
      category: '',
      name: '',
      distance: 0,
      description: '',
      favorite: false,
    },
    sortBy: 'name',
    categorizeBy: 'all',
  },
  setState: () => {},
});
