import './style.css';
import RestaurantItem from '../RestaurantItem/RestaurantItem';
import { Restaurant } from '../../types';

const RestaurantList = ({
  onItemClick,
  restaurantList,
}: {
  restaurantList: Restaurant[];
  onItemClick: CallableFunction;
}) => {
  const createRestaurantItemListElement = () => {
    return restaurantList.map(restaurant => {
      return <RestaurantItem key={restaurant.id} restaurant={restaurant} onClick={onItemClick} />;
    });
  };

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">{createRestaurantItemListElement()}</ul>
    </section>
  );
};

export default RestaurantList;
