import { Component } from 'react';
import { Category, Distance } from '../../types';
import { imgSrc } from '../../constants/imageSrc';

import styled from 'styled-components';

type Props = {
  name: string;
  category: Category;
  distance: Distance;
  description?: string;
};

export class RestaurantItem extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { name, category, distance, description } = this.props;

    return (
      <RestaurantWrapper>
        <RestaurantCategory>
          <Image src={imgSrc[category]} alt={category} className="category-icon" />
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
`;
const RestaurantCategory = styled.div`
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

const Image = styled.img`
  width: 36px;
  height: 36px;
`;

const RestaurantInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

const Name = styled.h3`
  margin: 0;
  font: var(--text-subtitle);
`;

const DistanceText = styled.span`
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
