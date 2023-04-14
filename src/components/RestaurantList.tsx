import { Category, Restaurant, SortingType } from '../types/restaurant';

import React, { MouseEvent, ChangeEvent } from 'react';
import { RestaurantItem } from './';
import styled from 'styled-components';

import { CATEGORIES, SORTING_TYPES } from '../constants';
import filterRestaurants from '../domain/filterRestaurants';

interface Props {
  restaurants: Restaurant[];
  openModal: (id: Restaurant['id']) => void;
}

interface State {
  category: Category | '전체';
  sortingType: SortingType;
}

class RestaurantList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      category: '전체',
      sortingType: '이름순'
    };
  }

  openDetailModal = (e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;

    const $li = e.target.closest('li');
    if ($li) this.props.openModal($li.id as Restaurant['id']);
  };

  onChangeCategory = (e: ChangeEvent) => {
    if (!(e.target instanceof HTMLSelectElement)) return;

    const category = e.target.value as Category;
    this.setState({ category });
  };

  onChangeSortingType = (e: ChangeEvent) => {
    if (!(e.target instanceof HTMLSelectElement)) return;

    const sortingType = e.target.value as SortingType;
    this.setState({ sortingType });
  };

  render() {
    const { category, sortingType } = this.state;
    const restaurants = filterRestaurants(this.props.restaurants, category, sortingType);

    return (
      <main>
        <FilterContainer>
          <select name="category" id="category-filter" onChange={this.onChangeCategory}>
            {['전체', ...CATEGORIES].map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select name="sorting" id="sorting-filter" onChange={this.onChangeSortingType}>
            {SORTING_TYPES.map((sortingType, index) => (
              <option key={index} value={sortingType}>
                {sortingType}
              </option>
            ))}
          </select>
        </FilterContainer>

        <RestaurantListContainer>
          <ul onClick={this.openDetailModal}>
            {restaurants.map((restaurant) => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            ))}
          </ul>
        </RestaurantListContainer>
      </main>
    );
  }
}

export default RestaurantList;

const FilterContainer = styled.section`
  display: flex;
  justify-content: space-between;

  margin-top: 24px;
  padding: 0 16px;

  select {
    height: 44px;
    min-width: 125px;

    border: 1px solid #d0d5dd;
    border-radius: 8px;
    padding: 8px;

    background: transparent;
    font-size: 16px;
  }
`;

const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin: 16px 0;
  padding: 0 16px;
`;
