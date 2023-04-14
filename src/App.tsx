import React, { useState } from 'react';
import * as styled from './App.styles';
import Header from './components/Header/Header';
import RestaurantDetailBottomSheet from './components/RestaurantDetailBottomSheet/RestaurantDetailBottomSheet';
import RestaurantList from './components/RestaurantList/RestaurantList';
import DropdownFilter from './components/common/DropdownFilter/DropdownFilter';
import CATEGORIES from './constants/categories';
import mockRestaurantsData from './data/mockData.json';
import GlobalStyle from './styles/GlobalStyle';
import ResetStyle from './styles/ResetStyle';
import type Filter from './types/Filter';
import type Restaurant from './types/Restaurant';

type AppState = {
  restaurants: Restaurant[];
  sortFilter: Filter<Restaurant> | null;
  categoryFilter: Filter<Restaurant> | null;
  openedRestaurant: Restaurant | null;
};

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
  const [appState, setAppState] = useState<AppState>({
    restaurants: mockRestaurantsData as Restaurant[],
    sortFilter: null,
    categoryFilter: null,
    openedRestaurant: null,
  });

  const getFilteredRestaurants = () => {
    const filters = [appState.sortFilter, appState.categoryFilter].filter(
      (filter): filter is Filter<Restaurant> => filter !== null,
    );

    return filters.reduce(
      (restaurants, filter) => filter(restaurants),
      appState.restaurants.slice(),
    );
  };

  const openBottomSheet = (restaurant: Restaurant) => {
    setAppState({ ...appState, openedRestaurant: restaurant });
  };

  const closeBottomSheet = () => {
    setAppState({ ...appState, openedRestaurant: null });
  };

  const { openedRestaurant } = appState;
  return (
    <>
      <ResetStyle />
      <GlobalStyle />

      <Header />

      <styled.RestaurantFilterContainer>
        <DropdownFilter
          options={DROPDOWN_CATEGORY_FILTERS}
          onChange={({ value: filter }) => setAppState({ ...appState, categoryFilter: filter })}
        />

        <DropdownFilter
          options={DROPDOWN_SORT_FILTERS}
          onChange={({ value: filter }) => setAppState({ ...appState, sortFilter: filter })}
        />
      </styled.RestaurantFilterContainer>

      <RestaurantList restaurants={getFilteredRestaurants()} onClickItem={openBottomSheet} />
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
