import styled from 'styled-components';
import { RestaurantItem } from './RestaurantItem';
import { Restaurant } from '../../type';

const Style = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;

    padding: 0 16px;
    margin: 16px 0;
  `,
};

interface RestaurantListProps {
  list: Restaurant[];
  handleClickRestaurantItem: (restaurant: Restaurant) => void;
}

export function RestaurantList({
  list,
  handleClickRestaurantItem,
}: RestaurantListProps) {
  return (
    <Style.Wrapper>
      {list.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          restaurant={restaurant}
          onClick={() => handleClickRestaurantItem(restaurant)}
        />
      ))}
    </Style.Wrapper>
  );
}
