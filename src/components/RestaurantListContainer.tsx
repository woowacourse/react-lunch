import { Component } from 'react';
import { data } from '../domain/RestaurantManager';
import RestaurantList from './RestaurantList';
import FilterBar from './FilterBar';

export default class RestaurantListContainer extends Component {
  state = {
    filterOptions: {
      category: '전체',
      sort: '이름순',
    },
  };

  handleChangeFilter = (filterOptions: { category: string; sort: string }) => {
    this.setState({ filterOptions });
  };

  render() {
    return (
      <>
        <FilterBar onChangeOptions={this.handleChangeFilter}></FilterBar>
        <RestaurantList
          filterOptions={this.state.filterOptions}
        ></RestaurantList>
      </>
    );
  }
}
