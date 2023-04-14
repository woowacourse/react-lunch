import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Selector from './components/Selector';
import mockData from './mockData/restaurantList.json';
import { AppState, Restaurant } from './utils/interfaces';
import { SelectorCategory, SelectorFilter } from './utils/types';
import { sortingByCategory, sortingByFilter } from './domain/restaurantSort';
import { CATEGORY_OPTIONS, FILTER_OPTIONS } from './utils/constants';

function App() {
  const localStorageSavedList = JSON.parse(localStorage.getItem('restaurantList') ?? '') as Array<Restaurant>;
  const restaurantMockDataList = mockData.restaurantList as Array<Restaurant>;

  const wholeList = [...localStorageSavedList, ...restaurantMockDataList];
  const currentList = sortingByFilter('이름순', wholeList);

  const [appState, setAppState] = useState<AppState>({ category: '전체', filter: '이름순', wholeList, currentList });

  const categoryOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value as SelectorCategory;
    const { filter, wholeList } = appState;

    const categortSotredList = sortingByCategory(selectedCategory, wholeList);
    const currentList = sortingByFilter(filter, categortSotredList);

    setAppState(prevState => ({ ...prevState, category: selectedCategory, currentList }));
  };

  const filterOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value as SelectorFilter;

    const { category, wholeList } = appState;

    const filterSortedList = sortingByFilter(selectedFilter, wholeList);
    const currentList = sortingByCategory(category, filterSortedList);

    setAppState(prevState => ({ ...prevState, filter: selectedFilter, currentList }));
  };

  return (
    <>
      <Header />
      <div className="restaurant-filter-container">
        <Selector<SelectorCategory>
          selectedValue={appState.category}
          optionList={CATEGORY_OPTIONS}
          onChange={categoryOnChange}
        />
        <Selector<SelectorFilter>
          selectedValue={appState.filter}
          optionList={FILTER_OPTIONS}
          onChange={filterOnChange}
        />
      </div>
      <ItemList itemList={appState.currentList} />
    </>
  );
}

export default App;
