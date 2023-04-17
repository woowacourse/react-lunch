import React from 'react';
import type { Restaurant } from '../@types/type';

export type RestaurantDetailModalContextState = {
  isModalOpen: boolean;
  modalRestaurantInfo: Restaurant | null;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalRestaurantInfo: React.Dispatch<React.SetStateAction<null | Restaurant>>;
};

export const RestaurantDetailModalContext = React.createContext({} as RestaurantDetailModalContextState);
