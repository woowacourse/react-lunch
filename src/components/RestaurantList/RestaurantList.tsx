import { Category, Restaurant, SortingType } from '../../types/restaurant';

import React, { ChangeEvent } from 'react';
import * as styled from './RestaurantList.styles';
import { RestaurantItem } from '..';

import { CATEGORIES, SORTING_TYPES } from '../../constants';

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
        <styled.FilterContainer>
          <select name="category" id="category-filter" onChange={this.onChangeCategory}>
            {['전체', ...CATEGORIES].map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
          <select name="sorting" id="sorting-filter" onChange={this.onChangeSortingType}>
            {SORTING_TYPES.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </styled.FilterContainer>

        <styled.RestaurantListContainer>
          <ul onClick={this.openDetailModal}>
            {this.props.restaurants.map((restaurant) => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant}></RestaurantItem>
            ))}
          </ul>
        </styled.RestaurantListContainer>
      </main>
    );
  }
}

export default RestaurantList;
