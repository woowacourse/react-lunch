import styled from 'styled-components';
import RestaurantItem from './RestaurantItem';
import { Restaurant, SetModalRestaurantId } from '../../@types/type';

type RestaurantListProps = SetModalRestaurantId & {
  restaurantList: Restaurant[];
};

const RestaurantList = ({ restaurantList, setModalRestaurantId }: RestaurantListProps) => {
  return (
    <Restaurants>
      {restaurantList.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} setModalRestaurantId={setModalRestaurantId} />
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
