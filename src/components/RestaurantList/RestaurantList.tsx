import styled from 'styled-components';

import { Restaurant } from '../../types';
import { RestaurantItem } from '../RestaurantItem/RestaurantItem';

type Props = {
  restaurants: Restaurant[];
  onRestaurantClick: (id: Restaurant['id']) => void;
};

export function RestaurantList({ restaurants, onRestaurantClick }: Props) {
  return (
    <RestaurantListWrapper>
      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          onRestaurantClick={onRestaurantClick}
        ></RestaurantItem>
      ))}
    </RestaurantListWrapper>
  );
}

const RestaurantListWrapper = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;
