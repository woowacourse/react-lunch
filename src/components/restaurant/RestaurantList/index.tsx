import React from 'react';

import * as S from './style';
import { Categories, Restaurant, SortOptions } from '../../../@types/type';
import { CATEGORIES, SORT_OPTIONS } from '../../../constants';
import restaurant from '../../../domain/restaurant';
import useFilteringList from '../../../hooks/useFilteringList';
import SelectBox from '../../common/SelectBox';
import RestaurantItem from '../RestaurantItem';

type Props = {
  restaurantList: Restaurant[];
  openModal: (modalRestaurantID: number) => void;
};

const RestaurantList = ({ restaurantList, openModal }: Props) => {
  const [filteringRestaurantList, changeFilteringFn] = useFilteringList(restaurantList, {
    category: restaurant.filtering(CATEGORIES.ALL),
    sort: restaurant.sorting(SORT_OPTIONS.NAME),
  });

  const changeCategoryOption = (option: Categories) => {
    changeFilteringFn('category', restaurant.filtering(option));
  };

  const changeSortOption = (option: SortOptions) => {
    changeFilteringFn('sort', restaurant.sorting(option));
  };

  return (
    <S.RestaurantListContainer>
      <S.SelectBoxContainer>
        <SelectBox options={Object.values(CATEGORIES)} setOption={changeCategoryOption} />
        <SelectBox options={Object.values(SORT_OPTIONS)} setOption={changeSortOption} />
      </S.SelectBoxContainer>
      <S.RestaurantList>
        {filteringRestaurantList.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} openModal={openModal} />
        ))}
      </S.RestaurantList>
    </S.RestaurantListContainer>
  );
};

export default RestaurantList;
