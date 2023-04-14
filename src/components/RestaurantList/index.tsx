import './style.css';
import { MouseEvent, PureComponent } from 'react';
import { Restaurant } from '../../types';
import { RESTAURANT_LI_ELEMENT } from '../../constants';
import RestaurantItem from '../RestaurantItem';

interface RestaurantListProps {
  restaurantList: Restaurant[];
  onItemClick: CallableFunction;
}

class RestaurantList extends PureComponent<RestaurantListProps> {
  handleItemClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const item = target.closest(RESTAURANT_LI_ELEMENT);

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
