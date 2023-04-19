import './style.css';
import { Restaurant } from '../../types';
import RestaurantItem from '../RestaurantItem/RestaurantItem';

const RestaurantList = ({
  restaurantList,
  setSelectedRestaurant,
}: {
  restaurantList: Restaurant[];
  setSelectedRestaurant: CallableFunction;
}) => {
  const createRestaurantItemListElement = () => {
    return restaurantList.map(restaurant => {
      return (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} setSelectedRestaurant={setSelectedRestaurant} />
      );
    });
  };

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">{createRestaurantItemListElement()}</ul>
    </section>
  );
};

export default RestaurantList;
