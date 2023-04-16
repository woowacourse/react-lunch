import { Category, Restaurant, SortingType } from '../types/restaurant';

import React, { MouseEvent, ChangeEvent, useState } from 'react';
import { Select, RestaurantItem } from './';
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
        <Select name="category" options={['전체', ...CATEGORIES]} onChange={onChangeSelect} />
        <Select name="sorting" options={SORTING_TYPES} onChange={onChangeSelect} />
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
`;

const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin: 16px 0;
  padding: 0 16px;
`;
