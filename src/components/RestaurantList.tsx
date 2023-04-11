import React from 'react';
import styled from 'styled-components';
import mockData from '../mockData.json';
import RestaurantItem from './RestaurantItem';
import { RestaurantItemType } from '../types';

const data: RestaurantItemType[] = JSON.parse(JSON.stringify(mockData));

class RestaurantList extends React.Component {
  render() {
    return (
      <RestaurantListWrapper>
        {data.map((restaurant) => (
          <RestaurantItem
            category={restaurant.category}
            name={restaurant.name}
            distance={restaurant.distance}
            description={restaurant.description}
            link={restaurant.link}
          />
        ))}
      </RestaurantListWrapper>
    );
  }
}

const RestaurantListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
`;

export default RestaurantList;
