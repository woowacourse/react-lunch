import { Component, PropsWithChildren } from 'react';
import Header from './components/Header';
import FilterContainer from './components/FilterContainter';
import RestaurantList from './components/RestaurantList';
import Modal from './components/Modal';
import { Restaurant } from './types';
import mockData from './mockData.json';
import { getFilteredRestaurantsByCategory, getSortedRestaurants } from './RestaurantUtils';
import type { RestaurantSortOption, RestaurantCategoryFilterOption } from './RestaurantUtils';
import './App.css';

type AppState = {
  restaurants: Restaurant[];
  categoryFilterOption: RestaurantCategoryFilterOption;
  sortOption: RestaurantSortOption;
};

export default class App extends Component<PropsWithChildren, AppState> {
  constructor(props: PropsWithChildren) {
    super(props);

    this.state = {
      restaurants: mockData as Restaurant[],
      categoryFilterOption: '전체',
      sortOption: 'distance',
    };
  }

  render() {
    const { restaurants, categoryFilterOption, sortOption } = this.state;
    const filteredRestaurants = getFilteredRestaurantsByCategory(restaurants, categoryFilterOption);
    const sortedRestaurants = getSortedRestaurants(filteredRestaurants, sortOption);

    return (
      <div className="App">
        <Header />
        <FilterContainer
          onChangeCategoryFilter={this.onChangeCategoryFilter.bind(this)}
          onChangeSortFilter={this.onChangeSortFilter.bind(this)}
        />
        <RestaurantList restaurants={sortedRestaurants} />
        <Modal />
      </div>
    );
  }

  onChangeCategoryFilter(category: RestaurantCategoryFilterOption) {
    this.setState({ categoryFilterOption: category });
  }

  onChangeSortFilter(sortOption: RestaurantSortOption) {
    this.setState({ sortOption: sortOption });
  }
}
