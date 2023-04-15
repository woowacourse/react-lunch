import React, { useState } from 'react';
import Header from './Header/Header';
import FilterListContainer from './FilterListContainer/FilterListContainer';
import RestaurantList from './RestaurantList/RestaurantList';

import './App.css';
import { Category, Sort } from './data/type';

function App() {
  const [seletedCategory, setSeletedCategory] = useState<Category>('전체');
  const [seletedSort, setSeletedSort] = useState<Sort>('이름순');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSeletedCategory(e.target.value as Category);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSeletedSort(e.target.value as Sort);
  };

  return (
    <div className="App">
      <Header />
      <FilterListContainer
        selectedCategory={seletedCategory}
        selectedSort={seletedSort}
        categoryEvent={handleCategoryChange}
        sortEvent={handleSortChange}
      />
      <RestaurantList
        selectedCategory={seletedCategory}
        selectedSort={seletedSort}
      />
    </div>
  );
}

export default App;
