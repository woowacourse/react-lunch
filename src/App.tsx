import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Selector from './components/Selector';
import mockData from './mockData/restaurantList.json';
import { AppState, Restaurant } from './utils/interfaces';
import { SelectorCategory, SelectorFilter } from './utils/types';
import { CATEGORY_OPTIONS, FILTER_OPTIONS } from './utils/constants';
import useSortRestaurantList from './hooks/useSortRestaurantList';

const getInitialRestaunrantList = () => {
  const localStorageItem = localStorage.getItem('restaurantList') ?? '[]';
  const localStorageSavedList = JSON.parse(localStorageItem) as Array<Restaurant>;
  const restaurantMockDataList = mockData.restaurantList as Array<Restaurant>;

  return [...localStorageSavedList, ...restaurantMockDataList];
};

function App() {
  const sortedRestaurantList = useSortRestaurantList();

  const restaurantList = getInitialRestaunrantList();

  const currentList = sortedRestaurantList({ category: '전체', filter: '이름순', restaurantList });

  const [appState, setAppState] = useState<AppState>({
    category: '전체',
    filter: '이름순',
    wholeList: restaurantList,
    currentList,
  });

  const categoryOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value as SelectorCategory;
    const { filter, wholeList } = appState;

    const currentList = sortedRestaurantList({ category: selectedCategory, filter, restaurantList: wholeList });

    setAppState(prevState => ({ ...prevState, category: selectedCategory, currentList }));
  };

  const filterOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value as SelectorFilter;

    const { category, wholeList } = appState;

    const currentList = sortedRestaurantList({ category, filter: selectedFilter, restaurantList: wholeList });

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
