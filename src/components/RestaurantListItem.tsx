import { CATEGORY_ICONS } from '../constants/Restaurants';
import type Restaurant from '../types/Restaurant';
import * as styled from './RestaurantListItem.styles';
import Icon from './common/Icon';

type RestaurantListItemProps = {
  restaurant: Restaurant;
  onClick: () => void;
};

const RestaurantListItem = ({ restaurant, onClick }: RestaurantListItemProps) => {
  return (
    <styled.RestaurantListItem onClick={onClick} data-cy="restaurant-list-item">
      <styled.RestaurantListItemCategoryIcon title={restaurant.category}>
        <Icon mapper={CATEGORY_ICONS} name={restaurant.category} />
      </styled.RestaurantListItemCategoryIcon>

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
};

export default RestaurantListItem;
