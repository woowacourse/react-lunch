import './RestaurantItem.css';
import { Restaurant } from '../../types';
import { IMAGE_PATH } from '../../constants';

interface RestaurantItemProps {
  restaurant: Restaurant;
  handleClick: () => void;
}

function RestaurantItem({ restaurant, handleClick }: RestaurantItemProps) {
  const { id, category, name, distance, description } = restaurant;

  return (
    <li className="restaurant" id={String(id)} onClick={handleClick}>
      <div className="restaurant__category">
        <img src={`${IMAGE_PATH[category]}`} alt={category} className="category-icon" />
      </div>
      <div className="restaurant__info">
        <div className="restaurant__text">
          <h3 className="restaurant__name text-subtitle">{name}</h3>
          <span className="restaurant__distance text-body">캠퍼스부터 {distance}분 내</span>
          <p className="restaurant__description text-body">{description}</p>
        </div>
      </div>
    </li>
  );
}

export default RestaurantItem;
