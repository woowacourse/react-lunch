import { MouseEvent } from 'react';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import { Restaurant, RestaurantListProps } from '../../types/types';
import styles from './RestaurantsList.module.css';
import { getSelectedRestaurantsList } from '../../data/parseFn';

const RestaurantList = (props: RestaurantListProps) => {
  const handleRestaurantOnClick = (e: MouseEvent) => {
    props.changeRestaurantId(Number(e.currentTarget.getAttribute('value')));
  };

  const { category, sorting } = props;

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

export default RestaurantList;
