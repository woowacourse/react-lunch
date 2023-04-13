import './style.css';
import { Component, MouseEvent } from 'react';
import { RestaurantListProps } from '../../types';
import RestaurantItem from '../RestaurantItem';

class RestaurantList extends Component<RestaurantListProps> {
  shouldComponentUpdate(nextProps: RestaurantListProps) {
    return this.props.restaurantList !== nextProps.restaurantList;
  }

  handleItemClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const item = target.closest('.restaurant[data-id]');

    if (item instanceof HTMLLIElement) {
      this.props.onItemClick(Number(item.dataset.id));
    }
  };

  createRestaurantItemElements = () => {
    const { restaurantList } = this.props;

    return restaurantList.map((restaurant) => (
      <RestaurantItem key={restaurant.id} restaurant={restaurant} />
    ));
  };

  render() {
    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list" onClick={this.handleItemClick}>
          {this.createRestaurantItemElements()}
        </ul>
      </section>
    );
  }
}

export default RestaurantList;
