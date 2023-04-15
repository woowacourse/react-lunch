import React, { useState } from 'react';

import * as S from './style';
import { Categories, Restaurant, SortOptions } from '../../../@types/type';
import { CATEGORIES, SORT_OPTIONS } from '../../../constants';
import restaurant from '../../../domain/restaurant';
import SelectBox from '../../common/SelectBox';
import RestaurantItem from '../RestaurantItem';

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
    <S.RestaurantListContainer>
      <S.SelectBoxContainer>
        <SelectBox options={Object.values(CATEGORIES)} setOption={changeFilterOption} />
        <SelectBox options={Object.values(SORT_OPTIONS)} setOption={changeSortOption} />
      </S.SelectBoxContainer>
      <S.RestaurantList>
        {filterAndSortPipe().map((restaurant, index) => (
          <RestaurantItem key={index} restaurant={restaurant} openModal={openModal} />
        ))}
      </S.RestaurantList>
    </S.RestaurantListContainer>
  );
};

export default RestaurantList;
