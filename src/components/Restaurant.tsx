import { Component, ReactNode } from 'react';
import { State } from '../types';
import { getRestaurantListData } from '../data/restaurantListData';
import FilterSection from './FilterSection';
import RestaurantList from './RestaurantList';
import { filterRestaurant, sortRestaurant } from '../domains/restaurantUtil';

class Restaurant extends Component {
  state: State;

  constructor(props: {}) {
    super(props);

    const restaurantList = getRestaurantListData();

    this.state = {
      restaurantList: restaurantList, // 추가, 삭제, 즐겨찾기 -> setState 상태가 변화가 일어난다
      currentRestaurantList: restaurantList,
      selectedRestaurant: 0,
    };
  }

  filterAndSortRestaurantList(filter: string, sortBy: string) {
    const filteredRestaurantList = filterRestaurant([...this.state.restaurantList], filter);
    const sortedRestaurantList = sortRestaurant([...filteredRestaurantList], sortBy);
    this.setState({ currentRestaurantList: sortedRestaurantList });
  }

  render(): ReactNode {
    return (
      <>
        <FilterSection
          onChange={(filter: string, sortBy: string) =>
            this.filterAndSortRestaurantList(filter, sortBy)
          }
        />
        <RestaurantList restaurantList={this.state.currentRestaurantList} />
      </>
    );
  }
}

export default Restaurant;
