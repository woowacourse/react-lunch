import { ChangeEvent } from 'react';
import { CATEGORY_FILTER, SORTING_FILTER } from '../constants/restaurant';

export interface Option {
  value: string;
  label: string;
}

export type CategoryFilter = (typeof CATEGORY_FILTER)[number];

export type SortingFilter = (typeof SORTING_FILTER)[number];

export interface FilterProps {
  name: string;
  options: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface RestaurantFilterProps {
  onCategoryChange(category: string): void;
  onSortingChange(sorting: string): void;
}

export interface RestaurantListProps {
  category: CategoryFilter;
  sorting: SortingFilter;
  changeRestaurantId: (restaurantId: number) => void;
}

export interface RestaurantItemProps {
  name: string;
  category: CategoryFilter;
  distance: number;
  description: string;
}

export interface ModalProps {
  restaurantId?: number;
  handleClose: () => void;
}

export interface Restaurant {
  id: number;
  category: CategoryFilter;
  name: string;
  distance: number;
  description: string;
  link: string;
}
