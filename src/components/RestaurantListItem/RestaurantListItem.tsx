import type Restaurant from '../../types/Restaurant';
import CategoryIcon from '../CategoryIcon/CategoryIcon';
import * as styled from './RestaurantListItem.styles';

type RestaurantListItemProps = {
  restaurant: Restaurant;
  onClick: () => void;
};

const RestaurantListItem = ({restaurant, onClick}: RestaurantListItemProps) => {
  return (
    <styled.RestaurantListItem onClick={onClick} data-cy="restaurant-list-item">
      <CategoryIcon category={restaurant.category} />

      <header>
        <styled.RestaurantListItemHeaderTitle data-cy="title">
          {restaurant.name}
        </styled.RestaurantListItemHeaderTitle>
        <styled.RestaurantListItemHeaderSubtitle>
          캠퍼스부터 {restaurant.distanceByMinutes}분 내
        </styled.RestaurantListItemHeaderSubtitle>
      </header>

      <styled.RestaurantListItemBody>{restaurant.description}</styled.RestaurantListItemBody>
    </styled.RestaurantListItem>
  );
}

export default RestaurantListItem;
