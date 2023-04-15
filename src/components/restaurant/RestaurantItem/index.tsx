import React, { Component } from 'react';

import * as S from './style';
import { Restaurant } from '../../../@types/type';
import CategoryIcon from '../CategoryIcon';

type Props = {
  restaurant: Restaurant;
  openModal: (id: number) => void;
};

class RestaurantItem extends Component<Props> {
  onClickRestaurant = () => {
    this.props.openModal(this.props.restaurant.id);
  };

  render() {
    const { category, name, distanceByMinutes, description } = this.props.restaurant;

    return (
      <S.RestaurantItem onClick={this.onClickRestaurant}>
        <CategoryIcon category={category} />
        <S.InformationContainer>
          <S.RestaurantTitle>{name}</S.RestaurantTitle>
          <S.RestaurantDistance>캠퍼스부터 {distanceByMinutes}분 내</S.RestaurantDistance>
          <S.RestaurantDescription>{description}</S.RestaurantDescription>
        </S.InformationContainer>
      </S.RestaurantItem>
    );
  }
}

export default RestaurantItem;
