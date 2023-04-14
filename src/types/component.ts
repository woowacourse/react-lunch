import { ReactNode } from 'react';
import { Restaurant } from '.';

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
  RestaurantListProps,
  RestaurantElementProps,
  FilterSectionProps,
  FilterSectionState,
  ModalProps,
};
