import { useState } from 'react';
import * as styled from './App.styles';
import Header from './components/Header/Header';
import RestaurantDetailBottomSheet from './components/RestaurantDetailBottomSheet/RestaurantDetailBottomSheet';
import RestaurantList from './components/RestaurantList/RestaurantList';
import DropdownFilter from './components/common/DropdownFilter/DropdownFilter';
import CATEGORIES from './constants/categories';
import mockRestaurantsData from './data/mockData.json';
import GlobalStyle from './styles/GlobalStyle';
import ResetStyle from './styles/ResetStyle';
import type Restaurant from './types/Restaurant';
import useFilteredRestaurants from './hooks/useFilteredRestaurants';

const DROPDOWN_SORT_FILTERS = [
  {
    label: '이름순',
    value: (restaurants: Restaurant[]) => restaurants.sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    label: '거리순',
    value: (restaurants: Restaurant[]) =>
      restaurants.sort((a, b) => a.distanceByMinutes - b.distanceByMinutes),
  },
];

const DROPDOWN_CATEGORY_FILTERS = [
  { label: '전체', value: (restaurants: Restaurant[]) => restaurants },
  ...CATEGORIES.map((category) => ({
    label: category,
    value: (restaurants: Restaurant[]) =>
      restaurants.filter((restaurant) => restaurant.category === category),
  })),
];

const App = () => {
  const [openedRestaurant, setOpenedRestaurant] = useState<Restaurant | null>(null);

  const { filteredRestaurants, setSortFilter, setCategoryFilter } = useFilteredRestaurants(
    mockRestaurantsData as Restaurant[],
  );

  const openBottomSheet = (restaurant: Restaurant) => {
    setOpenedRestaurant(restaurant);
  };

  const closeBottomSheet = () => {
    setOpenedRestaurant(null);
  };

  return (
    <>
      <ResetStyle />
      <GlobalStyle />

      <Header />

      <styled.RestaurantFilterContainer>
        <DropdownFilter
          options={DROPDOWN_CATEGORY_FILTERS}
          onChange={({ value: filter }) => setSortFilter(filter)}
        />

        <DropdownFilter
          options={DROPDOWN_SORT_FILTERS}
          onChange={({ value: filter }) => setCategoryFilter(filter)}
        />
      </styled.RestaurantFilterContainer>

      <RestaurantList restaurants={filteredRestaurants} onClickItem={openBottomSheet} />
      {openedRestaurant !== null && (
        <RestaurantDetailBottomSheet
          restaurant={openedRestaurant}
          isOpened
          onClose={closeBottomSheet}
        />
      )}
    </>
  );
};

export default App;
