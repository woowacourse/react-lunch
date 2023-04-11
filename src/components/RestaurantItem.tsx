import React, { Component } from 'react';
import styled from 'styled-components';
import { Restaurant } from '../type';

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

const imgSrc = {
  한식: 'korean',
  중식: 'chinese',
  일식: 'japanese',
  양식: 'western',
  아시안: 'asian',
  기타: 'etc',
};

interface RestaurantProps {
  info: Restaurant;
}

export class RestaurantItem extends Component<RestaurantProps> {
  render(): React.ReactNode {
    return (
      <Style.Wrapper>
        <Style.RestaurantCategory>
          <img
            src={`${process.env.PUBLIC_URL}/images/category-${
              imgSrc[this.props.info.category]
            }.png`}
            alt={this.props.info.category}
          />
        </Style.RestaurantCategory>
        <Style.RestaurantInfo>
          <Style.DescriptionWrapper>
            <div>
              <Style.RestaurantName>
                {this.props.info.name}
              </Style.RestaurantName>
              <Style.RestaurantDistance>
                캠퍼스부터 {this.props.info.distance}분 내
              </Style.RestaurantDistance>
            </div>
          </Style.DescriptionWrapper>
          <Style.RestaurnatDescription>
            {this.props.info.description}
          </Style.RestaurnatDescription>
        </Style.RestaurantInfo>
      </Style.Wrapper>
    );
  }
}
