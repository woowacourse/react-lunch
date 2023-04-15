import React from 'react';
import SelectBox from './SelectBox';
import { CATEGORY } from '../../constants';
import { Category, All } from '../../types';

interface CategoryProps {
  setCategory: (newCategory: Category | All) => void;
}

function CategoryFilter({ setCategory }: CategoryProps) {
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as Category | All);
  };

  return <SelectBox filter={CATEGORY} handleOptionChange={handleCategoryChange} />;
}

export default CategoryFilter;
