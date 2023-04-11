import React, { Component } from 'react';
import styled from 'styled-components';

const Style = {
  Wrapper: styled.div`
    display: flex;
    align-items: flex-start;
    padding: 16px 8px;
    border-bottom: 1px solid #e9eaed;
  `,
  RestaurantInfo: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  `,
  RestaurantCategory: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;
    margin-right: 16px;
    border-radius: 50%;
    background: var(--lighten-color);
  `,
  DescriptionWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  RestaurantName: styled.h3`
    font: var(--lunch-subtitle);
  `,
  RestaurantDistance: styled.span`
    font: var(--lunch-body);
    color: var(--primary-color);
  `,
  RestaurnatDescription: styled.p`
    display: -webkit-box;
    padding-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font: var(--lunch-body);
  `,
};

export class RestaurantItem extends Component {
  render(): React.ReactNode {
    return (
      <Style.Wrapper>
        <Style.RestaurantCategory>
          <img
            src={process.env.PUBLIC_URL + '/images/category-asian.png'}
            alt="{category}"
          />
        </Style.RestaurantCategory>
        <Style.RestaurantInfo>
          <Style.DescriptionWrapper>
            <div>
              <Style.RestaurantName>피양콩 할머니</Style.RestaurantName>
              <Style.RestaurantDistance>
                캠퍼스부터 10분 내
              </Style.RestaurantDistance>
            </div>
          </Style.DescriptionWrapper>
          <Style.RestaurnatDescription>
            평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니.
            두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도
            사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선 맷돌로 직접
            간 콩만을 사용하며, 일체의 조미료를 넣지 않은 건강식을 선보인다.
            콩비지와 피양 만두가 이곳의 대표 메뉴지만, 할머니가 옛날 방식을
            고수하며 만들어내는 비지전골 또한 이 집의 역사를 느낄 수 있는 특별한
            메뉴다. 반찬은 손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼
            있다.
          </Style.RestaurnatDescription>
        </Style.RestaurantInfo>
      </Style.Wrapper>
    );
  }
}
