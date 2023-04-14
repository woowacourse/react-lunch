import { Restaurant } from '../../../types';
import RestaurantInfo from '../../RestaurantInfo';
import './RestaurantItem.css';

type RestaurantItemProps = {
  restaurant: Restaurant;
  onClick: (restaurantId: number) => void;
};

const RestaurantItem = ({ restaurant, onClick }: RestaurantItemProps) => {
  const onClickRestaurantItem = () => {
    const { id } = restaurant;

    onClick(id);
  };

  return (
    <li className="restaurant" onClick={onClickRestaurantItem}>
      <RestaurantInfo restaurant={restaurant} />
    </li>
  );
};

export default RestaurantItem;
