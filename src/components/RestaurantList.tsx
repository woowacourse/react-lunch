import { Category, Restaurant, SortingType } from '../types/restaurant';

import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import RestaurantItem from './RestaurantItem';
import { CATEGORIES, SORTING_TYPES } from '../constants';

interface Props {
  restaurants: Restaurant[];
  openModal: (id: Restaurant['id']) => void;
  setCategory: (category: Category) => void;
  setSortingType: (sortingType: SortingType) => void;
}

class RestaurantList extends React.Component<Props> {
  openDetailModal = (e: any) => {
    const { id } = e.target.closest('li');
    this.props.openModal(id);
  };

  onChangeCategory = (e: ChangeEvent) => {
    if (!(e.target instanceof HTMLSelectElement)) return;

    const { value: category } = e.target;
    this.props.setCategory(category as Category);
  };

  onChangeSortingType = (e: ChangeEvent) => {
    if (!(e.target instanceof HTMLSelectElement)) return;

    const { value: sortingType } = e.target;
    this.props.setSortingType(sortingType as SortingType);
  };

  render() {
    return (
      <main>
        <FilterContainer>
          <select name="category" id="category-filter" onChange={this.onChangeCategory}>
            {['전체', ...CATEGORIES].map(category => (
              <option value={category}>{category}</option>
            ))}
          </select>
          <select name="sorting" id="sorting-filter" onChange={this.onChangeSortingType}>
            {SORTING_TYPES.map(category => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </FilterContainer>

        <RestaurantListContainer>
          <ul onClick={this.openDetailModal}>
            {this.props.restaurants.map(restaurant => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant}></RestaurantItem>
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
