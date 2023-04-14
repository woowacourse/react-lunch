import { useState } from 'react';
import { Restaurant } from '../types';

const useSelectRestaurant = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  return { selectedRestaurant, setSelectedRestaurant };
};

export { useSelectRestaurant };
