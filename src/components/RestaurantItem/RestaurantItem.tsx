import { Component } from 'react';
import { Restaurant } from '../../types';
import { imgSrc } from '../../constants/imageSrc';

import styled from 'styled-components';

type Props = {
  restaurant: Restaurant;
  onRestaurantClick: React.MouseEventHandler<HTMLLIElement>;
};

export class RestaurantItem extends Component<Props> {
  render() {
    const { id, name, category, distance, description } = this.props.restaurant;
    const onRestaurantClick = this.props.onRestaurantClick;

    return (
      <RestaurantWrapper data-id={id} onClick={onRestaurantClick}>
        <RestaurantCategory>
          <Image src={imgSrc[category]} alt={category} />
        </RestaurantCategory>
        <RestaurantInfoWrapper>
          <Name>{name}</Name>
          <DistanceText>캠퍼스로부터 {distance}분 내</DistanceText>
          <Description>{description}</Description>
        </RestaurantInfoWrapper>
      </RestaurantWrapper>
    );
  }
}

const RestaurantWrapper = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
  cursor: pointer;
`;
export const RestaurantCategory = styled.div`
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
`;

export const Image = styled.img`
  width: 36px;
  height: 36px;
`;

export const RestaurantInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

export const Name = styled.h3`
  margin: 0;
  font: var(--text-subtitle);
`;

export const DistanceText = styled.span`
  color: var(--primary-color);
  font: var(--text-body);
`;
const Description = styled.p`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font: var(--text-body);
`;
