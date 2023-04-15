import { RestaurantDetail } from '../types/RestaurantDetail';
import { IMAGE_PATH } from '../constants/images';

interface RestaurantItemProps {
  itemDetail: RestaurantDetail;
}

export const RestaurantItem = ({ itemDetail }: RestaurantItemProps) => {
  const { id, category, name, distance, description } = itemDetail;

  return (
    <>
      <li className="restaurant" id={String(id)}>
        <div className="restaurant__category">
          <img
            src={IMAGE_PATH[category]}
            alt={category}
            className="category-icon"
          />
        </div>
        <div className="restaurant__info">
          <h3 className="restaurant__name text-subtitle">{name}</h3>
          <span className="restaurant__distance text-body">
            캠퍼스부터 {distance}분 내
          </span>
          <p className="restaurant__description text-body">{description}</p>
        </div>
      </li>
    </>
  );
};
