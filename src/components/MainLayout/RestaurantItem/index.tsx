import './style.css';

import CategoryIcon from '../../common/CategoryIcon';

import type { OnClickRestaurant, Restaurant } from '../../../domain/type';

interface Props {
  restaurant: Restaurant;
  onClickRestaurant: OnClickRestaurant;
}

export default function RestaurantItem(props: Props) {
  const { id, category, name, takeTime, description } = props.restaurant;

  return (
    <li
      className="restaurant"
      data-id={id}
      onClick={() => props.onClickRestaurant(props.restaurant)}
    >
      <div className="restaurant__category">
        <CategoryIcon category={category} />
      </div>
      <div className="restaurant__info">
        <div className="flex">
          <div>
            <h2 className="restaurant__name text-subtitle">{name}</h2>
            <span className="restaurant__takeTime text-body">
              캠퍼스부터 {takeTime}분 내
            </span>
          </div>
        </div>
        {description ? (
          <p className="restaurant__description text-body">{description}</p>
        ) : null}
      </div>
    </li>
  );
}
