import RestaurantItem from './RestaurantItem';
import './RestaurantList.css';
import { Restaurant } from '../../types';

type RestaurantListProps = {
  restaurants: Restaurant[];
  onClick: (restaurantId: number) => void;
};

const RestaurantList = ({ restaurants, onClick }: RestaurantListProps) => {
  return (
    <section className="restaurant-list-container">
      <ul>
        {restaurants.map((restaurant) => (
          <RestaurantItem restaurant={restaurant} onClick={onClick} key={restaurant.id} />
        ))}
      </ul>
    </section>
  );
};

export default RestaurantList;
