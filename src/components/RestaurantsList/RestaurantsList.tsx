import { MouseEvent } from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import { Restaurant, RestaurantListProps } from '../../types/types';
import styles from './RestaurantsList.module.css';
import { getSelectedRestaurantsList } from '../../data/parseFn';

const RestaurantsList = ({ category, sorting, changeRestaurantId }: RestaurantListProps) => {
  const handleRestaurantOnClick = (event: MouseEvent<HTMLLIElement>) => {
    changeRestaurantId(Number(event.currentTarget.getAttribute('value')));
  };

  const restaurants = getSelectedRestaurantsList(category, sorting);

  const restaurantItems = restaurants.map((restaurant: Restaurant) => {
    const restaurantItemProps = {
      key: restaurant.id,
      category: restaurant.category,
      name: restaurant.name,
      distance: restaurant.distance,
      description: restaurant.description,
    };
    return (
      <li key={restaurant.id} className={styles.restaurant} onClick={handleRestaurantOnClick} value={restaurant.id}>
        <RestaurantItem {...restaurantItemProps} />
      </li>
    );
  });
  return (
    <section className={styles.container}>
      <ul>{restaurantItems}</ul>
    </section>
  );
};

export default RestaurantsList;
