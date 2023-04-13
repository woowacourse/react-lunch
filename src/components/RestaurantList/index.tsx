import './style.css';
import { Component, MouseEvent } from 'react';
import { RestaurantListProps } from '../../types';
import RestaurantItem from '../RestaurantItem';

class RestaurantList extends Component<RestaurantListProps> {
  shouldComponentUpdate(nextProps: RestaurantListProps) {
    return this.props.restaurantList !== nextProps.restaurantList;
  }

  handleItemClick(event: MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement;
    const item = target.closest('.restaurant[data-id]');

    if (item instanceof HTMLLIElement) {
      this.props.onItemClick(Number(item.dataset.id));
    }
  }

  render() {
    const { restaurantList } = this.props;

    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list" onClick={(event) => this.handleItemClick(event)}>
          {restaurantList.map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </ul>
      </section>
    );
  }
}

export default RestaurantList;
