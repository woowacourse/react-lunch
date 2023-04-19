import { Restaurant } from '../../../types';
import RestaurantInfo from '../../RestaurantInfo';
import './RestaurantItem.css';

type RestaurantItemProps = {
  restaurant: Restaurant;
  onClick: (restaurantId: number) => void;
};

export default function RestaurantItem({ restaurant, onClick }: RestaurantItemProps) {
  const onClickRestaurantItem = () => {
    const { id } = restaurant;

    onClick(id);
  };

  const { link, ...restRestaurant } = restaurant;

  return (
    <li className="restaurant" onClick={onClickRestaurantItem}>
      <RestaurantInfo restaurant={restRestaurant} />
    </li>
  );
}
