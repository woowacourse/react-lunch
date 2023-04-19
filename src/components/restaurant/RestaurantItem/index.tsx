import React from 'react';

import * as S from './style';
import { Restaurant } from '../../../@types/type';
import CategoryIcon from '../CategoryIcon';

type Props = {
  restaurant: Restaurant;
  openModal: (id: number) => void;
};

const RestaurantItem = ({ restaurant: { category, name, distanceByMinutes, description, id }, openModal }: Props) => {
  return (
    <S.RestaurantItem onClick={() => openModal(id)}>
      <CategoryIcon category={category} />
      <S.InformationContainer>
        <S.RestaurantTitle>{name}</S.RestaurantTitle>
        <S.RestaurantDistance>캠퍼스부터 {distanceByMinutes}분 내</S.RestaurantDistance>
        <S.RestaurantDescription>{description}</S.RestaurantDescription>
      </S.InformationContainer>
    </S.RestaurantItem>
  );
};

export default RestaurantItem;
