import { Restaurant } from '../types/restaurant';

import React from 'react';
import styled from 'styled-components';

import { CATEGORY_IMAGE_MAP } from '../constants';
import { textBody, textSubtitle } from '../style/mixin';

interface Props {
  restaurant: Restaurant;
}

class RestaurantItem extends React.Component<Props> {
  render() {
    const { id, name, category, distance, description } = this.props.restaurant;

    return (
      <ItemWrapper id={id}>
        <CategoryImage>
          <img src={`./img/${CATEGORY_IMAGE_MAP[category]}`} alt={category} />
        </CategoryImage>
        <RestaurantInfo>
          <h3>{name}</h3>
          <Distance>캠퍼스부터 {distance}분 내</Distance>
          <Description>{description}</Description>
        </RestaurantInfo>
      </ItemWrapper>
    );
  }
}

export default RestaurantItem;

const ItemWrapper = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;

  cursor: pointer;
`;

const CategoryImage = styled.div`
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

  img {
    width: 36px;
    height: 36px;
  }
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h3 {
    margin: 0;
    ${textSubtitle}
  }
`;

const Distance = styled.span`
  color: var(--primary-color);
  ${textBody}
`;

const Description = styled.span`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${textBody}
`;
