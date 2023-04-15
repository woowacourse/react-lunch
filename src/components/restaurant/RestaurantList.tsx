import React, { useState } from 'react';
import styled from 'styled-components';

import RestaurantItem from './RestaurantItem';
import { Categories, Restaurant, SortOptions } from '../../@types/type';
import { CATEGORIES, SORT_OPTIONS } from '../../constants';
import restaurant from '../../domain/restaurant';
import SelectBox from '../common/SelectBox';

const RestaurantListLayout = styled.main`
  padding: 16px;
`;

const SelectBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Restaurants = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`;

type Props = {
  restaurantList: Restaurant[];
  openModal: (modalRestaurantID: number) => void;
};

const RestaurantList = ({ restaurantList, openModal }: Props) => {
  const [filterOption, setFilterOption] = useState<Categories>(CATEGORIES.ALL);
  const [sortOption, setSortOption] = useState<SortOptions>(SORT_OPTIONS.NAME);

  const filterAndSortPipe = () => {
    return [
      (_restaurant: Restaurant[]) => restaurant.filter(_restaurant, filterOption),
      (_restaurant: Restaurant[]) => restaurant.sort(_restaurant, sortOption),
    ].reduce((_restaurant, fn) => fn(_restaurant), restaurantList);
  };

  const changeFilterOption = (option: Categories) => {
    setFilterOption(option);
  };

  const changeSortOption = (option: SortOptions) => {
    setSortOption(option);
  };

  return (
    <RestaurantListLayout>
      <SelectBoxContainer>
        <SelectBox options={Object.values(CATEGORIES)} setOption={changeFilterOption} />
        <SelectBox options={Object.values(SORT_OPTIONS)} setOption={changeSortOption} />
      </SelectBoxContainer>
      <Restaurants>
        {filterAndSortPipe().map((restaurant, index) => (
          <RestaurantItem key={index} restaurant={restaurant} openModal={openModal} />
        ))}
      </Restaurants>
    </RestaurantListLayout>
  );
};

export default RestaurantList;
