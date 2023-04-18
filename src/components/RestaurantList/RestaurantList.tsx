import { Restaurant } from '../../types/restaurant';

import React from 'react';
import * as styled from './RestaurantList.styles';
import { RestaurantItem } from '..';

interface Props {
  restaurants: Restaurant[];
  openModal: (id: Restaurant['id']) => void;
}

const RestaurantList = (props: Props) => {
  const onClickRestaurantList = ({ target }: React.MouseEvent) => {
    const { id } = (target as HTMLUListElement).closest('li');
    props.openModal(id);
  };

  return (
    <styled.RestaurantListContainer>
      <ul onClick={onClickRestaurantList}>
        {props.restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </styled.RestaurantListContainer>
  );
};

export default RestaurantList;
