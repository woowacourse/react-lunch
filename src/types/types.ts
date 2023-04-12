import { ChangeEvent } from 'react';

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