import React, { Component, ReactNode } from 'react';
import St from './styled';
import categoryImg from '../../assets/category-asian.png';

class RestaurantItem extends Component {
  render(): ReactNode {
    return (
      <St.Layout>
        <St.LeftSection>
          <St.CategoryImg src={categoryImg} alt="categoryImg" />
        </St.LeftSection>
        <St.RightSection>
          <St.Title>피양콩 할머니</St.Title>
          <St.Distance>캠퍼스 부터 10분</St.Distance>
          <St.Detail>
            설명설명설명설명설명설명설명설명설명설명설명설명
          </St.Detail>
        </St.RightSection>
      </St.Layout>
    );
  }
}

export default RestaurantItem;
