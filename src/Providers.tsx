import type { PropsWithChildren } from 'react';
import { RestaurantProvider } from './context/RestaurantContext';
import mockRestaurantsData from './data/mockData.json';
import type Restaurant from './types/Restaurant';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <RestaurantProvider initialRestaurants={mockRestaurantsData as Restaurant[]}>
      {children}
    </RestaurantProvider>
  );
};
export default Providers;
