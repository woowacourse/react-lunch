import './style.css';
import { Restaurant } from '../../types';
import { useRestaurantList } from '../../hooks/restaurantList';

const RestaurantList = ({
  restaurantList,
  setSelectedRestaurant,
}: {
  restaurantList: Restaurant[];
  setSelectedRestaurant: CallableFunction;
}) => {
  const createRestaurantItemListElement = useRestaurantList(restaurantList, setSelectedRestaurant);

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">{createRestaurantItemListElement()}</ul>
    </section>
  );
};

export default RestaurantList;
