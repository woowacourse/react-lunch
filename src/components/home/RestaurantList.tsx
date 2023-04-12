import { Component } from 'react';
import styled from 'styled-components';
import SelectBox from '../common/SelectBox';

const RestaurantListLayout = styled.main`
  padding: 16px;
`;

const SelectBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

class RestaurantList extends Component {
  render() {
    return (
      <RestaurantListLayout>
        <SelectBoxContainer>
          <SelectBox options={['한식', '중식', '일식', '아시안', '양식', '기타']} />
          <SelectBox options={['이름순', '거리순']} />
        </SelectBoxContainer>
      </RestaurantListLayout>
    );
  }
}

export default RestaurantList;
