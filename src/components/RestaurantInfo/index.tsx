import { Restaurant } from '../../types';
import { categoryIconPath } from '../../constants/imagePath';
import './RestaurantInfo.css';

type RestaurantInfoProps = {
  restaurant: Restaurant;
  showLink?: boolean;
};

const RestaurantInfo = ({ restaurant, showLink }: RestaurantInfoProps) => {
  const { category, name, distance, description, link } = restaurant;

  return (
    <>
      <div className="restaurant__category">
        <img src={categoryIconPath[category]} alt={category} className="category-icon" />
      </div>
      <div className="restaurant__info">
        <h3 className="restaurant__name text-subtitle">{name}</h3>
        <span className="restaurant__distance text-body">캠퍼스부터 {distance}분 내</span>
        <p className="restaurant__description text-body">{description}</p>
      </div>
      {showLink && (
        <a href={link} target="_blank" rel="noreferrer" className="restaurant__link">
          {link}
        </a>
      )}
    </>
  );
};

RestaurantInfo.defaultProps = {
  showLink: false,
};

export default RestaurantInfo;
