import type Restaurant from '../../types/Restaurant';
import RestaurantListItem from '../RestaurantListItem/RestaurantListItem';
import * as styled from './RestaurantList.styles';

type RestaurantListProps = {
  restaurants: Restaurant[];
  onClickItem: (restaurant: Restaurant) => void;
};

const RestaurantList = ({restaurants, onClickItem}: RestaurantListProps) => {
  return (
    <styled.RestaurantList>
      {restaurants.map((restaurant) => (
        <RestaurantListItem
          key={restaurant.id}
          restaurant={restaurant}
          onClick={() => onClickItem(restaurant)}
        />
      ))}
    </styled.RestaurantList>
  );
}

export default RestaurantList;
