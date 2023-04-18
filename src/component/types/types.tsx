import { ChangeEvent } from "react";

export interface Option {
  value: string;
  label: string;
}

export interface FilterProps {
  name: string;
  options: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface RestaurantFilterProps {
  onCategoryChange: (category: string) => void;
  onSortingChange: (category: string) => void;
}

export interface RestaurantListProps {
  category: string;
  sorting: string;
  restaurantId: number | undefined;
  changeRestaurantId: (restaurantId: number) => void;
}

export interface RestaurantItemProps {
  name: string;
  category: string;
  distance: number;
  description: string;
}

export interface ModalProps {
  restaurantId: number | undefined;
  handleClose: () => void;
  isOpen: boolean;
}

export interface Restaurant {
  id: number;
  category: string;
  name: string;
  distance: number;
  description: string;
}
