import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Selector from './components/Selector';
import mockData from './mockData/restaurantList.json';
import { restaurant } from './utils/interfaces';
import { parseJson } from './utils/json';
import { SelectorCategory, SelectorFilter } from './utils/types';
import { CATEGORY_OPTIONS, FILTER_OPTIONS } from './utils/constants';
import { localStorageGetItem } from './utils/localStorage';
import { typePredicates } from './utils/typeCheck';
import { useRestaurantSorting } from './hook/useRestaurantSort';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

const App = () => {
  const localStorageSavedList = typePredicates<Array<restaurant>>({
    data: parseJson(JSON.stringify(localStorageGetItem('restaurantList'))),
    initialData: [],
  });

  const restaurantMockDataList = typePredicates<Array<restaurant>>({
    data: mockData.restaurantList,
    initialData: [],
  });

  const wholeList = [...localStorageSavedList, ...restaurantMockDataList];

  const { sortedRestaurants, setCurrentCategory, setCurrentFilter } = useRestaurantSorting({
    category: '전체',
    filter: '이름순',
    wholeList,
  });

  const categoryRef = useRef<HTMLSelectElement>(null);
  const sortRef = useRef<HTMLSelectElement>(null);

  const categoryOnChange = () => {
    const value = categoryRef.current?.value ?? '전체';

    if (!isFilterOptions<SelectorCategory>(value, CATEGORY_OPTIONS)) return;

    setCurrentCategory(value);
  };

  const filterOnChange = () => {
    const value = sortRef.current?.value ?? '이름순';

    if (!isFilterOptions<SelectorFilter>(value, FILTER_OPTIONS)) return;

    setCurrentFilter(value);
  };

  const isFilterOptions = <T extends string>(value: string, arrays: Array<T>): value is T => {
    return arrays.includes(value as T);
  };

  return (
    <>
      <Header />
      <div className="restaurant-filter-container">
        <Selector<SelectorCategory>
          filterRef={categoryRef}
          selectedValue={categoryRef.current?.value as SelectorCategory}
          optionList={CATEGORY_OPTIONS}
          onChange={categoryOnChange}
        />
        <Selector<SelectorFilter>
          filterRef={sortRef}
          selectedValue={sortRef.current?.value as SelectorFilter}
          optionList={FILTER_OPTIONS}
          onChange={filterOnChange}
        />
      </div>
      <ItemList itemList={sortedRestaurants} />
    </>
  );
};

export default App;
