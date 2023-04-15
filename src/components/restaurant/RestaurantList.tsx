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
  handleClickRestaurantItem: React.MouseEventHandler<HTMLUListElement>;
}

export function RestaurantList({
  list,
  handleClickRestaurantItem,
}: RestaurantListProps) {
  return (
    <Style.Wrapper>
      <ul onClick={handleClickRestaurantItem}>
        {list.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </Style.Wrapper>
  );
}
