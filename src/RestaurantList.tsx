import React from 'react';
import RestaurantItem from './RestaurantItem.tsx';
import { FilterOption, Restaurant } from './type';

type StateType = {
  restaurantList: Omit<Restaurant, 'link'>[];
};

type RestaurantListProps = {
  filterOptions: FilterOption;
  onToggleDrawer: (id?: number) => void;
};

class RestaurantList extends React.Component<RestaurantListProps> {
  state: StateType;

  constructor(props) {
    super(props);
    this.state = {
      restaurantList: [],
    };
  }

  componentDidMount(): void {
    const defaultData = localStorage.getItem('restaurantList');
    if (defaultData) {
      this.setState({ restaurantList: JSON.parse(defaultData) });
      return;
    }

    fetch('./mockData.json')
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('restaurantList', JSON.stringify(data));
        this.setState({ restaurantList: data });
      });
  }

  // TODO: 삭제해야댐
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {}

  // TODO: pipe로 변경해볼까?
  filterByCategory(category): Restaurant[] {
    if (category === '전체') return this.state.restaurantList;
    return this.state.restaurantList.filter(
      (restaurant) => restaurant.category === category
    );
  }

  sortRestaurants(category, sorting) {
    return this.filterByCategory(category).sort(
      (firstElement, secondElement) => {
        if (sorting === 'name') {
          return firstElement.title.localeCompare(secondElement.title);
        }
        if (sorting === 'distance') {
          return firstElement.distance - secondElement.distance;
        }
        return 0;
      }
    );
  }

  render() {
    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list">
          {this.sortRestaurants(
            this.props.filterOptions.category,
            this.props.filterOptions.sorting
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
