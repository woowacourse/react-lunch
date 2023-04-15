import React from 'react';
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

class App extends React.Component<Record<string, never>, AppState> {
  constructor() {
    super({});

    this.state = {
      restaurants: mockRestaurantsData as Restaurant[],
      sortFilter: null,
      categoryFilter: null,
      openedRestaurant: null,
    };
  }

  getFilteredRestaurants() {
    const filters = [this.state.sortFilter, this.state.categoryFilter].filter(
      (filter): filter is Filter<Restaurant> => filter !== null,
    );
    const filteredRestaurants = filters.reduce(
      (restaurants, filter) => filter(restaurants),
      this.state.restaurants.slice(),
    );
    return filteredRestaurants;
  }

  openBottomSheet = (restaurant: Restaurant) => {
    this.setState({ openedRestaurant: restaurant });
  };

  closeBottomSheet = () => {
    this.setState({ openedRestaurant: null });
  };

  render() {
    const { openedRestaurant } = this.state;
    return (
      <>
        <ResetStyle />
        <GlobalStyle />

        <Header />

        <styled.RestaurantFilterContainer>
          <DropdownFilter
            options={DROPDOWN_CATEGORY_FILTERS}
            onChange={({ value: filter }) => this.setState({ categoryFilter: filter })}
          />

          <DropdownFilter
            options={DROPDOWN_SORT_FILTERS}
            onChange={({ value: filter }) => this.setState({ sortFilter: filter })}
          />
        </styled.RestaurantFilterContainer>

        <RestaurantList
          restaurants={this.getFilteredRestaurants()}
          onClickItem={this.openBottomSheet}
        />
        {openedRestaurant !== null && (
          <RestaurantDetailBottomSheet
            restaurant={openedRestaurant}
            isOpened
            onClose={this.closeBottomSheet}
          />
        )}
      </>
    );
  }
}

export default App;
