import { ReactNode } from 'react';
import { Options, Restaurant } from '.';

interface SelectProps {
  attributes: {
    id: string;
    name: string;
    className: string;
  };
  options: Options;
  onChange: CallableFunction;
}

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
  SelectProps,
  RestaurantState,
  RestaurantListProps,
  RestaurantElementProps,
  FilterSectionProps,
  FilterSectionState,
  ModalProps,
};
