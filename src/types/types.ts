import { ChangeEvent } from 'react';

export interface Option {
  value: string;
  label: string;
}

export interface RestaurantFilterProps {
  name: string;
  options: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
