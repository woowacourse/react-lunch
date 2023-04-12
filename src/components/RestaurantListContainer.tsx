import { Component } from 'react';
import RestaurantList from './RestaurantList';
import FilterBar from './FilterBar';
import { Category } from '../types/RestaurantDetail';

export default class RestaurantListContainer extends Component {
  state: {
    category: Category;
    sort: string;
  } = {
    category: '전체',
    sort: 'name',
  };

  handleChangeFilter = (filterOptions: {
    category: Category;
    sort: string;
  }) => {
    this.setState({ filterOptions });
  };

  handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;

    this.setState({
      ...this.state,
      category,
    });
  };

  handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value;

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
