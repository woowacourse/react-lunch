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

const RestaurantList = (props: Props) => {
  const openDetailModal = ({ target }: React.MouseEvent) => {
    const { id } = (target as HTMLUListElement).closest('li');
    props.openModal(id);
  };

  const onChangeCategory = ({ target: { value: category } }: ChangeEvent<HTMLSelectElement>) => {
    props.setCategory(category as Category);
  };

  const onChangeSortingType = ({
    target: { value: sortingType },
  }: ChangeEvent<HTMLSelectElement>) => {
    props.setSortingType(sortingType as SortingType);
  };

  return (
    <main>
      <styled.FilterContainer>
        <select name="category" id="category-filter" onChange={onChangeCategory}>
          {['전체', ...CATEGORIES].map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select name="sorting" id="sorting-filter" onChange={onChangeSortingType}>
          {SORTING_TYPES.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </styled.FilterContainer>

      <styled.RestaurantListContainer>
        <ul onClick={openDetailModal}>
          {props.restaurants.map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant}></RestaurantItem>
          ))}
        </ul>
      </styled.RestaurantListContainer>
    </main>
  );
};

export default RestaurantList;
