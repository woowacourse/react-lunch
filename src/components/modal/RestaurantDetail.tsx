import { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { Style as RestaurantStyle } from '../RestaurantItem';
import { imgSrc } from '../../constants';
import { RestaurantProps } from '../../type';

const Style = {
  ...RestaurantStyle,
  ImageWrapper: styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  `,
  RestaurantLink: styled.p`
    color: var(--grey-500);
  `,
  RestaurantDescription: styled.p`
    display: -webkit-box;
    padding-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    font: var(--lunch-body);
  `,
};

export class RestaurantDetail extends Component<RestaurantProps> {
  render(): ReactNode {
    return (
      <>
        <Style.ImageWrapper>
          <Style.RestaurantCategory>
            <img
              src={`${process.env.PUBLIC_URL}/images/category-${
                imgSrc[this.props.info.category]
              }.png`}
              alt={this.props.info.category}
            />
          </Style.RestaurantCategory>
        </Style.ImageWrapper>
        <Style.RestaurantName>{this.props.info.name}</Style.RestaurantName>
        <Style.RestaurantDistance>
          캠퍼스로부터 {this.props.info.distance}분 내
        </Style.RestaurantDistance>
        <Style.RestaurantDescription>
          {this.props.info.description}
        </Style.RestaurantDescription>
        <a href={this.props.info.link}>
          <Style.RestaurantLink>{this.props.info.link}</Style.RestaurantLink>
        </a>
      </>
    );
  }
}
