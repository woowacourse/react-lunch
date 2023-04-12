import { Component } from 'react';
import styled from 'styled-components';
import SelectBox from '../common/SelectBox';
import mockData from '../../mockData.json';
import RestaurantItem from './RestaurantItem';

const RestaurantListLayout = styled.main`
  padding: 16px;
`;

const SelectBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Restaurants = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 16px 0;
`;

class RestaurantList extends Component {
  state = {
    restaurantList: mockData,
  };

  render() {
    return (
      <RestaurantListLayout>
        <SelectBoxContainer>
          <SelectBox options={['한식', '중식', '일식', '아시안', '양식', '기타']} />
          <SelectBox options={['이름순', '거리순']} />
        </SelectBoxContainer>
        <Restaurants>
          {this.state.restaurantList.map((restaurant, index) => (
            <RestaurantItem key={index} {...restaurant} />
          ))}
        </Restaurants>
      </RestaurantListLayout>
    );
  }
}

export default RestaurantList;
