import React from 'react';
import RestaurantItem from './RestaurantItem.tsx';
import { FilterOption, Restaurant } from './util/type.js';
import { pipe } from './util/util.ts';
type RestaurantListState = {
  restaurantList: Omit<Restaurant, 'link'>[];
};

type RestaurantListProps = {
  filterOptions: FilterOption;
  onToggleDrawer: (id?: number) => void;
};

class RestaurantList extends React.Component<RestaurantListProps, RestaurantListState> {
  constructor(props) {
    super(props);
    this.state = {
      restaurantList: [],
    };
  }

  componentDidMount(): void {
    const rawRestaurantList = localStorage.getItem('restaurantList');
    if (rawRestaurantList) {
      this.setState({ restaurantList: JSON.parse(rawRestaurantList) });
      return;
    }

    fetch('./mockData.json')
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('restaurantList', JSON.stringify(data));
        this.setState({ restaurantList: data });
      });
  }

  filterByCategory(restaurantList, category): Restaurant[] {
    if (category === '전체') return restaurantList;
    return restaurantList.filter(
      (restaurant) => restaurant.category === category
    );
  }

  filterBySort(restaurantList, sorting): Restaurant[] {
    return restaurantList.sort((firstElement, secondElement) => {
      if (sorting === 'name') {
        return firstElement.title.localeCompare(secondElement.title);
      }
      if (sorting === 'distance') {
        return firstElement.distance - secondElement.distance;
      }
      return 0;
    });
  }

  sortRestaurants(rl, category, sorting) {
    return this.filterBySort(this.filterByCategory(rl, category), sorting);
  }

  render() {
    const { category, sorting } = this.props.filterOptions;

    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list">
          {pipe(this.filterByCategory, this.filterBySort)(
            this.state.restaurantList,
            [category, sorting]
          ).map((restaurant) => (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              onToggleDrawer={this.props.onToggleDrawer}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default RestaurantList;
