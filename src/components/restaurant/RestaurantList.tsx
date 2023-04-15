import { Component } from 'react';
import styled from 'styled-components';
import SelectBox from '../common/SelectBox';
import RestaurantItem from './RestaurantItem';
import restaurant from '../../domain/restaurant';
import { CATEGORIES, SORT_OPTIONS } from '../../constants';
import { Categories, Restaurant, SetModalRestaurantId, SortOptions } from '../../@types/type';

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

type Props = SetModalRestaurantId & {
  restaurantList: Restaurant[];
};

class RestaurantList extends Component<Props> {
  state = {
    filterOption: CATEGORIES.ALL,
    sortOption: SORT_OPTIONS.NAME,
  };

  filterAndSortPipe = () => {
    return [
      (_restaurant: Restaurant[]) => restaurant.filter(_restaurant, this.state.filterOption),
      (_restaurant: Restaurant[]) => restaurant.sort(_restaurant, this.state.sortOption),
    ].reduce((_restaurant, fn) => fn(_restaurant), this.props.restaurantList);
  };

  setFilterOption = (option: Categories) => {
    this.setState({
      filterOption: option,
    });
  };

  setSortOption = (option: SortOptions) => {
    this.setState({
      sortOption: option,
    });
  };

  render() {
    return (
      <RestaurantListLayout>
        <SelectBoxContainer>
          <SelectBox options={Object.values(CATEGORIES)} setOption={this.setFilterOption} />
          <SelectBox options={Object.values(SORT_OPTIONS)} setOption={this.setSortOption} />
        </SelectBoxContainer>
        <Restaurants>
          {this.filterAndSortPipe().map((restaurant, index) => (
            <RestaurantItem
              key={index}
              restaurant={restaurant}
              setModalRestaurantId={this.props.setModalRestaurantId}
            />
          ))}
        </Restaurants>
      </RestaurantListLayout>
    );
  }
}

export default RestaurantList;
