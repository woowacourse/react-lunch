import { Component } from 'react';
import styled from 'styled-components';
import type { RestaurantInfo } from '../types';
import { ENGLISH_CATEGORY } from '../constants';

interface RestaurantItem {
  restaurant: RestaurantInfo;
  onClick: () => void;
}

class Restaurant extends Component<RestaurantItem> {
  render() {
    const { restaurant: restaurantInfo } = this.props;

    return (
      <RestaurantContainer onClick={this.props.onClick}>
        <CategoryContainer>
          <CategoryImage
            src={`${process.env.PUBLIC_URL}/assets/category-${
              ENGLISH_CATEGORY[restaurantInfo.category]
            }.png`}
            alt={restaurantInfo.category}
          />
        </CategoryContainer>
        <article>
          <h3 className='text-subtitle'>{restaurantInfo.name}</h3>
          <TakingTime className='text-body'>
            캠퍼스부터 {restaurantInfo.takingTime}분 내
          </TakingTime>
          <Description className='text-body'>
            {restaurantInfo.description}
          </Description>
        </article>
      </RestaurantContainer>
    );
  }
}

const RestaurantContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
  cursor: pointer;
`;

const CategoryContainer = styled.div`
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

const CategoryImage = styled.img`
  width: 36px;
  height: 36px;
`;

const TakingTime = styled.p`
  margin: 2px 0 8px;
  color: var(--primary-color);
`;

const Description = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--grey-300);
`;

export default Restaurant;
