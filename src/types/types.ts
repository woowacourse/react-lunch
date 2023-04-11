import { ChangeEvent } from 'react';

export interface RestaurantFilterProps {
  name: string;
  options: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
