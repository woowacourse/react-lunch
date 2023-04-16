import React, { useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Selector from './components/Selector';
import mockData from './mockData/restaurantList.json';
import { appState, restaurant } from './utils/interfaces';
import { parseJson } from './utils/json';
import { SelectorCategory, SelectorFilter } from './utils/types';
import { sortingByCategory, sortingByFilter } from './domain/restaurantSort';
import { CATEGORY_OPTIONS, FILTER_OPTIONS } from './utils/constants';
import { localStorageGetItem } from './utils/localStorage';
import { typePredicates } from './utils/typeCheck';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

const App = () =>{
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

  const [ appValues, setAppValues ] = useState<appState>({
    category: '전체',
    filter: '이름순',
    wholeList,
    currentList,
  })

  const categoryRef = useRef<HTMLSelectElement>(null);
  const sortRef = useRef<HTMLSelectElement>(null);

  const categoryOnChange=()=>{
    const value = categoryRef.current?.value ?? '전체';

    if (!isFilterOptions<SelectorCategory>(value, CATEGORY_OPTIONS)) return;

    const { filter } = appValues;

    const categortSortedList = sortingByCategory(value, appValues.wholeList);
    const currentList = sortingByFilter(filter, categortSortedList);

    setAppValues({ ...appValues, category: value, currentList });
  }

  const filterOnChange=()=>{
    const value = sortRef.current?.value ?? '이름순';

    if (!isFilterOptions<SelectorFilter>(value, FILTER_OPTIONS)) return;

    const { category } = appValues;

    const filterSortedList = sortingByFilter(value, appValues.wholeList);
    const currentList = sortingByCategory(category, filterSortedList);

    setAppValues({ ...appValues, filter: value, currentList });
  }

  const isFilterOptions=<T extends string>(value: string, arrays: Array<T>): value is T =>{
    return arrays.includes(value as T);
  }

    return (
      <>
        <Header />
        <div className="restaurant-filter-container">
          <Selector<SelectorCategory>
            filterRef={categoryRef}
            selectedValue={appValues.category}
            optionList={CATEGORY_OPTIONS}
            onChange={categoryOnChange}
          />
          <Selector<SelectorFilter>
            filterRef={sortRef}
            selectedValue={appValues.filter}
            optionList={FILTER_OPTIONS}
            onChange={filterOnChange}
          />
        </div>
        <ItemList itemList={appValues.currentList} />
      </>
    );
}

export default App;
