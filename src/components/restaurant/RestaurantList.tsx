import styled from 'styled-components';
import RestaurantItem from './RestaurantItem';
import { Restaurant } from '../../@types/type';

type RestaurantListProps = {
  restaurantList: Restaurant[];
};

const RestaurantList = ({ restaurantList }: RestaurantListProps) => {
  return (
    <Restaurants>
      {restaurantList.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </Restaurants>
  );
};

const Restaurants = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

export default RestaurantList;
