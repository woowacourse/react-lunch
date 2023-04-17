import useWrappingContext from '../../hooks/useWrappingContext';
import Store from '../../store';
import RestaurantItem from '../RestaurantItem';
import styles from './RestaurantList.module.css';
import useRestaurantList from './hooks/useRestaurantList';

function RestaurantList() {
  const { category, sortOption } = useWrappingContext(Store);
  const restaurantList = useRestaurantList(category, sortOption);

  return (
    <ul className={styles.restaurantList}>
      {restaurantList.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} isModal={false} />
      ))}
    </ul>
  );
}

export default RestaurantList;
