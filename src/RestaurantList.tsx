import React from 'react';
import RestaurantItem from './RestaurantItem.tsx';
import { FilterOption, Restaurant } from './util/type.ts';
import { pipe } from './util/util.ts';

type StateType = {
  restaurantList: Omit<Restaurant, 'link'>[];
};

type RestaurantListProps = {
  filterOptions: FilterOption;
  onToggleDrawer: (id?: number) => void;
};

class RestaurantList extends React.PureComponent<RestaurantListProps, StateType> {
  state = {
      restaurantList: [],
    };

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

  filterByCategory = (category) => (restaurantList) => {
    if (category === '전체') return restaurantList;
    return restaurantList.filter(
      (restaurant) => restaurant.category === category
    );
  }

  filterBySort = (sorting) => (restaurantList) => {
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
  
  render() {
    const { category, sorting } = this.props.filterOptions; 
    
    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list">
          {pipe(
            this.filterByCategory(category),
            this.filterBySort(sorting)
          )(this.state.restaurantList)
            .map((restaurant) => (
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

export default RestaurantList