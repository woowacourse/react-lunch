import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { RestaurantProvider } from './context/RestaurantContext';
import mockRestaurantsData from './data/mockData.json';
import theme from './styles/theme';
import type Restaurant from './types/Restaurant';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantProvider initialRestaurants={mockRestaurantsData as Restaurant[]}>
        {children}
      </RestaurantProvider>
    </ThemeProvider>
  );
};
export default Providers;
