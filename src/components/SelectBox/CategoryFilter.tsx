import React from 'react';
import SelectBox from './SelectBox';
import { CATEGORY } from '../../constants';
import { Category } from '../../types';

interface CategoryProps {
  setCategory: (newCategory: Category) => void;
}

function CategoryFilter({ setCategory }: CategoryProps) {
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as Category);
  };

  return <SelectBox filter={CATEGORY} handleOptionChange={handleCategoryChange} />;
}

export default CategoryFilter;
