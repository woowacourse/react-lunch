import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Selector from './components/Selector';
import mockData from './mockData/restaurantList.json';
import { appState, restaurant } from './utils/interfaces';
import { parseJson } from './utils/json';
import { selectorCategory, selectorFilter } from './utils/types';
import { sortingByCategory, sortingByFilter } from './domain/restaurantSort';
import { CATEGORY_OPTIONS, FILTER_OPTIONS } from './utils/constants';
import { localStorageGetItem } from './utils/localStorage';
import { typePredicates } from './utils/typeCheck';

function App() {
  const localStorageSavedList = typePredicates<Array<restaurant>>({
    data: parseJson(JSON.stringify(localStorageGetItem('restaurantList'))),
    initialData: [],
  });

  const restaurantMockDataList = typePredicates<Array<restaurant>>({
    data: mockData.restaurantList,
    initialData: [],
  });

  const wholeList = [...localStorageSavedList, ...restaurantMockDataList];
  const currentList = sortingByFilter('이름순', wholeList);

  const [appState, setAppState] = useState<appState>({ category: '전체', filter: '이름순', wholeList, currentList });

  const categoryOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value as selectorCategory;
    const { filter, wholeList } = appState;

    const categortSotredList = sortingByCategory(selectedCategory, wholeList);
    const currentList = sortingByFilter(filter, categortSotredList);

    setAppState(prevState => ({ ...prevState, category: selectedCategory, currentList }));
  };

  const filterOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value as selectorFilter;

    const { category, wholeList } = appState;

    const filterSortedList = sortingByFilter(selectedFilter, wholeList);
    const currentList = sortingByCategory(category, filterSortedList);

    setAppState(prevState => ({ ...prevState, filter: selectedFilter, currentList }));
  };

  return (
    <>
      <Header />
      <div className="restaurant-filter-container">
        <Selector<selectorCategory>
          selectedValue={appState.category}
          optionList={CATEGORY_OPTIONS}
          onChange={categoryOnChange}
        />
        <Selector<selectorFilter>
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
