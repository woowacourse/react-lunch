import { Component } from 'react';
import styled from 'styled-components';
import SelectBox from '../common/SelectBox';
import mockData from '../../mockData.json';
import RestaurantItem from './RestaurantItem';
import restaurant from '../../domain/restaurant';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { CATEGORIES, SORT_OPTIONS, LOCAL_STORAGE_KEY } from '../../constants';
import { Restaurant, SetModalRestaurant } from '../../@types/type';

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

class RestaurantList extends Component<SetModalRestaurant> {
  state = {
    restaurantList: mockData as Restaurant[],
    filterOption: CATEGORIES.ALL,
    sortOption: SORT_OPTIONS.NAME,
  };

  componentDidMount() {
    const savedRestaurants = getLocalStorage(LOCAL_STORAGE_KEY.RESTAURANT);

    if (savedRestaurants) {
      this.setState({
        restaurantList: savedRestaurants,
      });
    } else setLocalStorage(LOCAL_STORAGE_KEY.RESTAURANT, this.state.restaurantList);
  }

  filterAndSort = () => {
    return restaurant.sort(
      restaurant.filter(this.state.restaurantList, this.state.filterOption),
      this.state.sortOption,
    );
  };

  setFilterOption = (option: string) => {
    this.setState({
      filterOption: option,
    });
  };

  setSortOption = (option: string) => {
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
          {this.filterAndSort().map((restaurant, index) => (
            <RestaurantItem key={index} restaurant={restaurant} setModalRestaurant={this.props.setModalRestaurant} />
          ))}
        </Restaurants>
      </RestaurantListLayout>
    );
  }
}

export default RestaurantList;
