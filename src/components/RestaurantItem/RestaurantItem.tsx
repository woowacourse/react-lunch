import { Restaurant } from '../../types/restaurant';

import React from 'react';
import { CategoryImage } from '..';
import * as styled from './RestaurantItem.styles';

interface Props {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: Props) => {
  return (
    <styled.ItemWrapper id={restaurant.id}>
      <CategoryImage category={restaurant.category} />
      <styled.RestaurantInfo>
        <styled.RestaurantName>{restaurant.name}</styled.RestaurantName>
        <styled.Distance>캠퍼스부터 {restaurant.distance}분 내</styled.Distance>
        <styled.Description>{restaurant.description}</styled.Description>
      </styled.RestaurantInfo>
    </styled.ItemWrapper>
  );
};

export default RestaurantItem;
