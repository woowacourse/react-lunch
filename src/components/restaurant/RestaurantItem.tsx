import { Component } from 'react';
import styled from 'styled-components';
import { Restaurant } from '../../App';
import { CATEGORIES } from './RestaurantList';
import CategoryIcon from '../common/CategoryIcon';

const SRestaurant = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid var(--divide-color);

  cursor: pointer;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
`;

const Distance = styled.span`
  color: var(--primary-color);
`;

const Description = styled.p`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export type Props = {
  category: (typeof CATEGORIES)[keyof typeof CATEGORIES];
  name: string;
  distanceByMinutes: number;
  description: string;
  referenceUrl: string;
  setModalRestaurant: (restaurant: Restaurant) => void;
};

class RestaurantItem extends Component<Props> {
  onClickRestaurant = () => {
    this.props.setModalRestaurant({
      category: this.props.category,
      name: this.props.name,
      distanceByMinutes: this.props.distanceByMinutes,
      description: this.props.description,
      referenceUrl: this.props.referenceUrl,
    });
  };

  render() {
    return (
      <SRestaurant onClick={this.onClickRestaurant}>
        <CategoryIcon category={this.props.category} />
        <Information>
          <h3 className="text-subtitle">{this.props.name}</h3>
          <Distance className="text-body">캠퍼스부터 {this.props.distanceByMinutes}분 내</Distance>
          <Description className="text-body">{this.props.description}</Description>
        </Information>
      </SRestaurant>
    );
  }
}

export default RestaurantItem;
