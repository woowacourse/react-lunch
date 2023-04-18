import { Category, SortingType } from '../../types/restaurant';

import React, { ChangeEvent } from 'react';
import * as styled from './Filter.styles';

import { CATEGORIES, SORTING_TYPES } from '../../constants';

interface Props {
  setCategory: (category: Category | '전체') => void;
  setSortingType: (sortingType: SortingType) => void;
}

const Filter = (props: Props) => {
  const onChangeCategory = ({ target: { value: category } }: ChangeEvent<HTMLSelectElement>) => {
    props.setCategory(category as Category);
  };

  const onChangeSortingType = ({
    target: { value: sortingType },
  }: ChangeEvent<HTMLSelectElement>) => {
    props.setSortingType(sortingType as SortingType);
  };

  return (
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
  );
};

export default Filter;
