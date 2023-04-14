import { Category, Restaurant, SortingType } from '../types/restaurant';

import React, { MouseEvent, ChangeEvent, useState } from 'react';
import { RestaurantItem } from './';
import styled from 'styled-components';

import filterRestaurants from '../domain/filterRestaurants';
import { CATEGORIES, SORTING_TYPES } from '../constants';

interface Props {
  restaurants: Restaurant[];
  openModal: (id: Restaurant['id']) => void;
}

const RestaurantList = ({ restaurants, openModal }: Props) => {
  const [category, setCategory] = useState<Category | '전체'>('전체');
  const [sortingType, setSortingType] = useState<SortingType>('이름순');
  const filteredRestaurants = filterRestaurants(restaurants, category, sortingType);

  const openDetailModal = (e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;

    const $li = e.target.closest('li');
    if ($li) openModal($li.id as Restaurant['id']);
  };

  const onChangeSelect = (e: ChangeEvent) => {
    if (!(e.target instanceof HTMLSelectElement)) return;
    const { name, value } = e.target;
    if (name === 'category') setCategory(value as Category);
    if (name === 'sorting') setSortingType(value as SortingType);
  };

  return (
    <main>
      <FilterContainer>
        <select name="category" onChange={onChangeSelect}>
          {['전체', ...CATEGORIES].map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select name="sorting" onChange={onChangeSelect}>
          {SORTING_TYPES.map((sortingType, index) => (
            <option key={index} value={sortingType}>
              {sortingType}
            </option>
          ))}
        </select>
      </FilterContainer>

      <RestaurantListContainer>
        <ul onClick={openDetailModal}>
          {filteredRestaurants.map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </ul>
      </RestaurantListContainer>
    </main>
  );
};

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
