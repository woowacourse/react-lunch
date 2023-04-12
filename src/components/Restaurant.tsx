import { Component } from 'react';
import { State } from '../types';
import { getRestaurantListData } from '../data/restaurantListData';
import { filterAndSortRestaurantList } from '../domains/restaurantUtil';
import FilterSection from './FilterSection';
import RestaurantList from './RestaurantList';

class Restaurant extends Component {
  state: State;

  constructor(props: {}) {
    super(props);

    const restaurantList = filterAndSortRestaurantList(getRestaurantListData());

    this.state = {
      restaurantList: restaurantList, // 추가, 삭제, 즐겨찾기 -> setState 상태가 변화가 일어난다
      currentRestaurantList: restaurantList,
      selectedRestaurant: 0,
    };
  }

  updateCurrentRestaurantList(filter: string, sortBy: string) {
    const updatedRestaurantList = filterAndSortRestaurantList(
      this.state.restaurantList,
      filter,
      sortBy
    );
    this.setState({ currentRestaurantList: updatedRestaurantList });
  }

  render() {
    return (
      <>
        <FilterSection
          onChange={(filter: string, sortBy: string) =>
            this.updateCurrentRestaurantList(filter, sortBy)
          }
        />
        <RestaurantList restaurantList={this.state.currentRestaurantList} />
      </>
    );
  }
}

export default Restaurant;
