import { RestaurantItem } from 'components/RestaurantItem/RestaurantItem';
import styled from 'styled-components';
import { Restaurant } from 'types';

type Props = {
  restaurants: Restaurant[];
  onRestaurantClick: React.MouseEventHandler<HTMLLIElement>;
};

export function RestaurantList({ restaurants, onRestaurantClick }: Props) {
  return (
    <RestaurantListWrapper>
      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          onRestaurantClick={onRestaurantClick}
        />
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
