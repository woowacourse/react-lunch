import { Component } from 'react';
import styled from 'styled-components';
import asian from '../../asset/category-asian.png';

const Restaurant = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;

  cursor: pointer;
`;

const CategoryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  margin-right: 16px;

  border-radius: 50%;
  background: #f6a88a;
  img {
    width: 36px;
    height: 36px;
  }
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`;

const RestaurantName = styled.h3`
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
`;

const RestaurantDistance = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #ec4a0a;
`;

const RestaurantDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

type Props = {
  category: string;
  name: string;
  distanceByMinutes: number;
  description: string;
  referenceUrl: string;
};

class RestaurantItem extends Component<Props> {
  render() {
    console.log(asian);
    return (
      <Restaurant>
        <CategoryIcon>
          <img src={asian} alt={this.props.category} />
        </CategoryIcon>
        <RestaurantInfo>
          <RestaurantName>{this.props.name}</RestaurantName>
          <RestaurantDistance>캠퍼스부터 {this.props.distanceByMinutes}분 내</RestaurantDistance>
          <RestaurantDescription>{this.props.description}</RestaurantDescription>
        </RestaurantInfo>
      </Restaurant>
    );
  }
}

export default RestaurantItem;
