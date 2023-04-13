import { Component, PropsWithChildren } from 'react';
import { Header, Modal } from './components/common';
import { FilterContainer, RestaurantDetailView, RestaurantList } from './components';

import { Restaurant } from './types';
import mockData from './mockData.json';
import {
  getFilteredRestaurantsByCategory,
  getSortedRestaurants,
  getRestaurantById,
} from './RestaurantUtils';
import type { RestaurantSortOption, RestaurantCategoryFilterOption } from './RestaurantUtils';
import './App.css';

type AppState = {
  restaurants: Restaurant[];
  categoryFilterOption: RestaurantCategoryFilterOption;
  sortOption: RestaurantSortOption;
  restaurantForDetailView: Restaurant;
  isModalOpen: boolean;
};

export default class App extends Component<PropsWithChildren, AppState> {
  constructor(props: PropsWithChildren) {
    super(props);

    this.state = {
      restaurants: mockData as Restaurant[],
      categoryFilterOption: '전체',
      sortOption: 'name',
      restaurantForDetailView: mockData[0] as Restaurant,
      isModalOpen: false,
    };
  }

  render() {
    const { restaurants, categoryFilterOption, sortOption, isModalOpen, restaurantForDetailView } =
      this.state;
    const filteredRestaurants = getFilteredRestaurantsByCategory(restaurants, categoryFilterOption);
    const sortedRestaurants = getSortedRestaurants(filteredRestaurants, sortOption);

    return (
      <div className="App">
        <Header title={'점심 뭐 먹지'} />
        <FilterContainer
          onChangeCategoryFilter={this.onChangeCategoryFilter}
          onChangeSortFilter={this.onChangeSortFilter}
        />
        <RestaurantList restaurants={sortedRestaurants} onClick={this.onClickRestaurantItem} />
        {isModalOpen && (
          <Modal onClick={this.onClickModalCloseButton}>
            <RestaurantDetailView restaurant={restaurantForDetailView} />
          </Modal>
        )}
      </div>
    );
  }

  onChangeCategoryFilter = (category: RestaurantCategoryFilterOption) => {
    this.setState({ categoryFilterOption: category });
  };

  onChangeSortFilter = (sortOption: RestaurantSortOption) => {
    this.setState({ sortOption: sortOption });
  };

  onClickRestaurantItem = (restaurantId: number) => {
    const targetRestaurant = getRestaurantById(this.state.restaurants, restaurantId);

    this.setState({ restaurantForDetailView: targetRestaurant, isModalOpen: true });
  };

  onClickModalCloseButton = () => {
    this.setState({ isModalOpen: false });
  };
}
