import { Component } from 'react';
import restaurantMockData from './mocks/restaurants.json';
import type { RestaurantInfo } from './types';
import { CATEGORY, LANGUAGE, SORTING_SELECT } from './constants';
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from './utils/localStorageHandler';
import RestaurantList from './components/RestaurantList';
import RestaurantSelect from './components/RestaurantSelect';
import HeaderSection from './components/HeaderSection';

interface RestaurantAppProps {
  filteredRestaurants: RestaurantInfo[];
  category: string;
  sorting: string;
}

class App extends Component<{}, RestaurantAppProps> {
  state = {
    filteredRestaurants: this.filterBySelectedOptions(
      getItemFromLocalStorage('category') ?? CATEGORY.ALL,
      getItemFromLocalStorage('sorting') ?? SORTING_SELECT.NAME
    ),
    category: getItemFromLocalStorage('category') ?? CATEGORY.ALL,
    sorting: getItemFromLocalStorage('sorting') ?? SORTING_SELECT.NAME,
  };

  handleCategorySelect = (value: string) => {
    const filteredRestaurants = this.filterBySelectedOptions(value);
    this.setState({
      filteredRestaurants: filteredRestaurants,
      category: value,
    });

    setItemInLocalStorage('category', value);
  };

  handleSortingSelect = (value: string) => {
    const filteredRestaurants = this.filterBySelectedOptions(
      this.state.category,
      value
    );
    this.setState({ filteredRestaurants: filteredRestaurants, sorting: value });

    setItemInLocalStorage('sorting', value);
  };

  sortRestaurantsByName(restaurants: RestaurantInfo[]) {
    return [...restaurants].sort((resA, resB) =>
      resA.name.localeCompare(resB.name, LANGUAGE)
    );
  }

  filterBySelectedOptions(
    category: string = this.state.category,
    sorting: string = this.state.sorting
  ) {
    const filteredRestaurants = this.sortRestaurantsByName(
      restaurantMockData
    ).filter((restaurant) =>
      category === CATEGORY.ALL ? restaurant : restaurant.category === category
    );

    return this.sortBySelectedOption(sorting, filteredRestaurants);
  }

  sortBySelectedOption(sorting: string, filteredRestaurants: RestaurantInfo[]) {
    if (sorting === SORTING_SELECT.NAME) {
      return this.sortRestaurantsByName(filteredRestaurants);
    }
    return [...filteredRestaurants].sort(
      (resA, resB) => resA.takingTime - resB.takingTime
    );
  }

  render() {
    return (
      <>
        <HeaderSection></HeaderSection>
        <RestaurantSelect
          onChangeCategory={this.handleCategorySelect}
          onChangeSorting={this.handleSortingSelect}
          selectedCategory={this.state.category}
          selectedSorting={this.state.sorting}
        />
        <RestaurantList
          restaurantList={this.state.filteredRestaurants}
          category={this.state.category}
        />
      </>
    );
  }
}

export default App;
