import { Component } from 'react';
import { data } from '../domain/RestaurantManager';
import RestaurantList from './RestaurantList';
import FilterBar from './FilterBar';

export default class RestaurantListContainer extends Component {
  state = {
    category: '전체',
    sort: '이름순',
  };

  handleChangeFilter = (filterOptions: { category: string; sort: string }) => {
    this.setState({ filterOptions });
  };

  handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;

    if (typeof category !== 'string') return;

    this.setState({
      ...this.state,
      category,
    });
  };

  handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value;

    if (typeof sort !== 'string') return;

    this.setState({
      ...this.state,
      sort,
    });
  };

  render() {
    return (
      <>
        <FilterBar
          onChangeCategory={this.handleCategory}
          onChangeSort={this.handleSort}
        ></FilterBar>
        <RestaurantList
          category={this.state.category}
          sort={this.state.sort}
        ></RestaurantList>
      </>
    );
  }
}
