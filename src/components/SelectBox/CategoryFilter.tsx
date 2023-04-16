import React from 'react';
import SelectBox from './SelectBox';
import { CATEGORY } from '../../constants';
import { Category } from '../../types';
import { isCategoryType } from '../../types/guard';

interface CategoryProps {
  setCategory: (newCategory: Category) => void;
}

function CategoryFilter({ setCategory }: CategoryProps) {
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (isCategoryType(event.target.value)) setCategory(event.target.value);
  };

  return <SelectBox filter={CATEGORY} handleOptionChange={handleCategoryChange} />;
}

export default CategoryFilter;
