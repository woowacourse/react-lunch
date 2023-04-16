import React from 'react';
import SelectBox from './SelectBox';
import { CATEGORY, CATEGORY_LIST } from '../../constants';
import { Category } from '../../types';

interface CategoryProps {
  setCategory: (newCategory: Category) => void;
}

const isCategory = (filter: string): filter is Category => {
  if (CATEGORY_LIST.includes(filter)) return true;
  return false;
};

function CategoryFilter({ setCategory }: CategoryProps) {
  const onChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (isCategory(event.target.value)) {
      setCategory(event.target.value);
    }
  };

  return <SelectBox filter={CATEGORY} onOptionChange={onChangeCategory} />;
}

export default CategoryFilter;
