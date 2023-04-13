import { Restaurant } from '../types/restaurant';

import React from 'react';
import { CategoryImage } from './';
import styled from 'styled-components';

import { textBody, textSubtitle } from '../style/mixin';

interface Props {
  restaurant: Restaurant;
}

class RestaurantItem extends React.Component<Props> {
  render() {
    const { id, name, category, distance, description } = this.props.restaurant;

    return (
      <ItemWrapper id={id}>
        <CategoryImage category={category} />
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
