import { ReactNode } from 'react';
import { Restaurant } from '.';

interface RestaurantState {
  restaurantList: Restaurant[];
  currentRestaurantList: Restaurant[];
  selectedRestaurant: Restaurant | null;
  isModalOpen: boolean;
}

interface RestaurantListProps {
  restaurantList: Restaurant[];
  onItemClick: CallableFunction;
}

interface RestaurantElementProps {
  restaurant: Restaurant;
}

interface FilterSectionProps {
  onChange: CallableFunction;
}

interface FilterSectionState {
  category: string;
  sortBy: string;
}

interface ModalProps {
  content: ReactNode;
  isModalOpen: boolean;
  onToggle: CallableFunction;
}

export type {
  RestaurantState,
  RestaurantListProps,
  RestaurantElementProps,
  FilterSectionProps,
  FilterSectionState,
  ModalProps,
};
