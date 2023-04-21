import { createContext, useState } from 'react';
import mockData from '../data/mockData.json';
import { CATEGORY, Restaurant, SORTINGWAY } from '../types/Restaurant';

interface GlobalState {
  restaurants: Restaurant[];
  setRestaurants: (value: Restaurant[]) => void;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  modalInfo: Restaurant;
  setModalInfo: (value: Restaurant) => void;
  sortBy: typeof SORTINGWAY[keyof typeof SORTINGWAY];
  setSortBy: (value: string) => void;
  categorizeBy: typeof CATEGORY[keyof typeof CATEGORY];
  setCategorizeBy: (value: string) => void;
}

interface GlobalProviderProps {
  children: React.ReactNode;
}

const initialModalInfo: Restaurant = {
  category: CATEGORY['전체'],
  name: '',
  distance: 0,
  description: '',
  favorite: false,
};

export const RestaurantContext = createContext<GlobalState>({
  restaurants: [],
  setRestaurants: () => {},
  modalOpen: false,
  setModalOpen: () => {},
  modalInfo: initialModalInfo,
  setModalInfo: () => {},
  sortBy: SORTINGWAY['이름순'],
  setSortBy: () => {},
  categorizeBy: CATEGORY['전체'],
  setCategorizeBy: () => {},
});

export const RestaurantContextProvider = ({
  children,
}: GlobalProviderProps) => {
  const [restaurants, setRestaurants] = useState(mockData);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState(initialModalInfo);
  const [sortBy, setSortBy] = useState('name');
  const [categorizeBy, setCategorizeBy] = useState('all');

  const state = {
    restaurants,
    setRestaurants,
    modalOpen,
    setModalOpen,
    modalInfo,
    setModalInfo,
    sortBy,
    setSortBy,
    categorizeBy,
    setCategorizeBy,
  };
  return (
    <RestaurantContext.Provider value={state}>
      {children}
    </RestaurantContext.Provider>
  );
};
