import { Component } from 'react';
import { RestaurantList } from './RestaurantList';
import { FilterBar } from './FilterBar';
import { Category } from '../types/RestaurantDetail';
import Modal from './Modal';
import {
  RESTAURANT_CATEGORY,
  SORTING_OPTION,
} from '../constants/filterOptions';

export default class RestaurantListContainer extends Component {
  state: {
    category: Category;
    sort: string;
    restaurantID: number;
  } = {
    category: RESTAURANT_CATEGORY.all,
    sort: SORTING_OPTION.name,
    restaurantID: 0,
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

  handleOpenModal = (event: React.MouseEvent<HTMLUListElement>) => {
    const li = (event.target as HTMLElement).closest('li');
    if (!li) return;
    const restaurantID = Number(li.id);

    this.setState({ ...this.state, restaurantID });
  };

  render() {
    const { category, sort, restaurantID } = this.state;

    return (
      <>
        <FilterBar
          onChangeCategory={this.handleCategory}
          onChangeSort={this.handleSort}
        ></FilterBar>
        <RestaurantList
          category={category}
          sort={sort}
          onOpenModal={this.handleOpenModal}
        ></RestaurantList>
        <Modal
          category={category}
          sort={sort}
          restaurantID={restaurantID}
        ></Modal>
      </>
    );
  }
}
