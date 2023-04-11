import React from 'react';
import styled from 'styled-components';
import { CATEGORY_IMG } from '../constants';
import { RestaurantItemType } from '../types';

class RestaurantItem extends React.Component<RestaurantItemType> {
  constructor(props: RestaurantItemType) {
    super(props);
  }

  render() {
    return (
      <RestaurantItemWrapper>
        <CategoryWrapper>
          <CategoryIcon src={CATEGORY_IMG[this.props.category]} alt={this.props.category} />
        </CategoryWrapper>
        <RestaurantInfo>
          <h3>{this.props.name}</h3>
          <span>캠퍼스부터 {this.props.distance}분 이내</span>
          <p>{this.props.description}</p>
        </RestaurantInfo>
      </RestaurantItemWrapper>
    );
  }
}

const RestaurantItemWrapper = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
`;

const CategoryWrapper = styled.div`
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

const CategoryIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > h3 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
    color: var(----grey-500);
  }

  & > span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: var(--primary-color);
  }

  & > p {
    margin-top: 6px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: var(----grey-500);
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 2; // 원하는 라인수
    -webkit-box-orient: vertical;
  }
`;

export default RestaurantItem;
