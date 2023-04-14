import './style.css';
import { MouseEvent } from 'react';
import { Restaurant } from '../../types';
import { RESTAURANT_LI_ELEMENT } from '../../constants';
import RestaurantItem from '../RestaurantItem';

interface RestaurantListProps {
  restaurantList: Restaurant[];
  onItemClick: CallableFunction;
}

function RestaurantList({ restaurantList, onItemClick }: RestaurantListProps) {
  const handleItemClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const item = target.closest(RESTAURANT_LI_ELEMENT);

    if (item instanceof HTMLLIElement) {
      onItemClick(Number(item.dataset.id));
    }
  };

  const createRestaurantItemElements = () => {
    return restaurantList.map((restaurant) => (
      <RestaurantItem key={restaurant.id} restaurant={restaurant} />
    ));
  };

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list" onClick={handleItemClick}>
        {createRestaurantItemElements()}
      </ul>
    </section>
  );
}

export default RestaurantList;
