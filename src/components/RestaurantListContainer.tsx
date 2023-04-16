import { Component } from 'react';
import RestaurantList from './RestaurantList';
import FilterBar from './FilterBar';
import { Category } from '../types/RestaurantDetail';
import Modal from './Modal';

interface RestaurantListContainerType {
  category: Category;
  sort: string;
  restaurantID: number;
}

export default class RestaurantListContainer extends Component<
  object,
  RestaurantListContainerType
> {
  state: RestaurantListContainerType = {
    category: '전체',
    sort: '이름순',
    restaurantID: 0,
  };

  handleChangeFilter = (filterOptions: {
    category: Category;
    sort: string;
  }) => {
    this.setState({ ...filterOptions });
  };

  isCategory = (category: string): category is Category => {
    const categoris = [
      '전체',
      '한식',
      '중식',
      '일식',
      '양식',
      '아시안',
      '기타',
    ];

    if (categoris.includes(category)) return true;
    return false;
  };

  handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;

    if (!this.isCategory(category)) return;

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
