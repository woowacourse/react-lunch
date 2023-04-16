import { useEffect, useState } from 'react';
import * as styled from './App.styles';
import Header from './components/Header';
import RestaurantDetailBottomSheet from './components/RestaurantDetailBottomSheet';
import RestaurantList from './components/RestaurantList';
import type { DropdownOption } from './components/common/Dropdown';
import Dropdown from './components/common/Dropdown';
import { CATEGORIES } from './constants/Restaurants';
import useRestaurants from './hooks/useRestaurants';
import GlobalStyle from './styles/GlobalStyle';
import ResetStyle from './styles/ResetStyle';
import type Filter from './types/Filter';
import type Restaurant from './types/Restaurant';

const DROPDOWN_SORT_FILTERS: DropdownOption<Filter<Restaurant>>[] = [
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

const DROPDOWN_CATEGORY_FILTERS: DropdownOption<Filter<Restaurant>>[] = [
  { label: '전체', value: (restaurants: Restaurant[]) => restaurants },
  ...CATEGORIES.map((category) => ({
    label: category,
    value: (restaurants: Restaurant[]) =>
      restaurants.filter((restaurant) => restaurant.category === category),
  })),
];

const App = () => {
  const { filteredRestaurants, sortFilter, setSortFilter, categoryFilter, setCategoryFilter } =
    useRestaurants();

  useEffect(() => {
    setSortFilter(() => DROPDOWN_SORT_FILTERS[0].value);
    setCategoryFilter(() => DROPDOWN_CATEGORY_FILTERS[0].value);
  }, []);

  const sortOption =
    DROPDOWN_SORT_FILTERS.find(({ value: filter }) => sortFilter === filter) ??
    DROPDOWN_SORT_FILTERS[0];
  const categoryOption =
    DROPDOWN_CATEGORY_FILTERS.find(({ value: filter }) => categoryFilter === filter) ??
    DROPDOWN_CATEGORY_FILTERS[0];

  const [openedRestaurant, setOpenedRestaurant] = useState<Restaurant | null>(null);

  const openBottomSheet = (restaurant: Restaurant) => setOpenedRestaurant(restaurant);

  const closeBottomSheet = () => setOpenedRestaurant(null);

  return (
    <>
      <ResetStyle />
      <GlobalStyle />

      <Header />

      <styled.RestaurantFilterContainer>
        <Dropdown
          options={DROPDOWN_CATEGORY_FILTERS}
          selectedOption={categoryOption}
          onChange={({ value: filter }) => setCategoryFilter(() => filter)}
        />

        <Dropdown
          options={DROPDOWN_SORT_FILTERS}
          selectedOption={sortOption}
          onChange={({ value: filter }) => setSortFilter(() => filter)}
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
