import React from 'react';
import SelectBox from './SelectBox';
import { CATEGORY } from '../../constants';
import { Category, All } from '../../types';

interface CategoryProps {
  setCategory: (newCategory: Category | All) => void;
}

function CategoryFilter(props: CategoryProps) {
  const onChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.setCategory(event.target.value as Category | All);
  };

  return <SelectBox filter={CATEGORY} onOptionChange={onChangeCategory} />;
}

export default CategoryFilter;
