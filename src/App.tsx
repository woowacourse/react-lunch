import { Component } from 'react';
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
  selectedRestaurant: Restaurant;
  isOpenModal: boolean;
};

export default class App extends Component {
  state: AppState = {
    restaurants: mockData as Restaurant[],
    categoryFilterOption: '전체',
    sortOption: 'name',
    selectedRestaurant: mockData[0] as Restaurant,
    isOpenModal: false,
  };

  render() {
    const { restaurants, categoryFilterOption, sortOption, isOpenModal, selectedRestaurant } =
      this.state;
    const filteredRestaurants = getFilteredRestaurantsByCategory(restaurants, categoryFilterOption);
    const sortedRestaurants = getSortedRestaurants(filteredRestaurants, sortOption);

    return (
      <div className="App">
        <Header>{'점심 뭐 먹지'}</Header>
        <FilterContainer
          onChangeCategoryFilter={this.onChangeCategoryFilter}
          onChangeSortFilter={this.onChangeSortFilter}
        />
        <RestaurantList restaurants={sortedRestaurants} onClick={this.onClickRestaurantItem} />
        {isOpenModal && (
          <Modal onClick={this.onClickModalCloseButton}>
            <RestaurantDetailView restaurant={selectedRestaurant} />
          </Modal>
        )}
      </div>
    );
  }

  onChangeCategoryFilter = (category: RestaurantCategoryFilterOption) => {
    this.setState({ categoryFilterOption: category });
  };

  onChangeSortFilter = (sortOption: RestaurantSortOption) => {
    this.setState({ sortOption });
  };

  onClickRestaurantItem = (restaurantId: number) => {
    const targetRestaurant = getRestaurantById(this.state.restaurants, restaurantId);

    this.setState({ selectedRestaurant: targetRestaurant, isOpenModal: true });
  };

  onClickModalCloseButton = () => {
    this.setState({ isOpenModal: false });
  };
}
