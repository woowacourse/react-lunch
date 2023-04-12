import { Component } from 'react';

import './style.css';

import FilterSection from './FilterSection';
import RestaurantListSection from './RestaurantListSection';

import { Restaurant } from '../../domain/type';

interface Props {
  restaurants: Restaurant[] | null;
}

interface State {
  category: string;
  sortBy: string;
}

class MainLayout extends Component<Props, State> {
  state = {
    category: '전체',
    sortBy: '이름순',
  };

  filterByCategory(restaurants: Props['restaurants']) {
    if (restaurants === null) return null;

    if (this.state.category === '전체') return restaurants;

    return restaurants.filter(
      (restaurant) => restaurant.category === this.state.category,
    );
  }

  sortByName(restaurants: Props['restaurants']) {
    if (restaurants === null) return null;

    return [...restaurants].sort(this.compareByName);
  }

  sortByDistance(restaurants: Props['restaurants']) {
    if (restaurants === null) return null;

    return [...restaurants].sort((a: Restaurant, b: Restaurant) => {
      if (a.distance === b.distance) {
        return this.compareByName(a, b);
      }

      return a.distance - b.distance;
    });
  }

  compareByName(a: Restaurant, b: Restaurant) {
    return a.name.localeCompare(b.name);
  }

  handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ ...this.state, category: event.target.value });
  };

  handleSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ ...this.state, sortBy: event.target.value });
  };

  render() {
    const filtered = this.filterByCategory(this.props.restaurants);
    const sorted =
      this.state.sortBy === '이름순'
        ? this.sortByName(filtered)
        : this.sortByDistance(filtered);

    return (
      <main>
        <FilterSection
          onChangeCategory={this.handleCategoryChange}
          onChangeSorting={this.handleSortingChange}
        />
        <RestaurantListSection restaurants={sorted} />
      </main>
    );
  }
}

export default MainLayout;
