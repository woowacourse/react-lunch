import React from 'react';
import './App.css';
import Header from 'components/Header';
import ItemList from 'components/ItemList';
import Selector from 'components/Selector';
import mockData from 'mockData/restaurantList.json';
import { Restaurant } from 'utils/interfaces';
import { SelectorCategory, SelectorFilter } from 'utils/types';
import { CATEGORY_OPTIONS, FILTER_OPTIONS } from 'utils/constants';
import useSortedRestaurantList from 'hooks/useSortRestaurantList';

const getInitialRestaunrantList = () => {
  const localStorageItem = localStorage.getItem('restaurantList') ?? '[]';
  const localStorageSavedList = JSON.parse(localStorageItem) as Array<Restaurant>;
  const restaurantMockDataList = mockData.restaurantList as Array<Restaurant>;

  return [...localStorageSavedList, ...restaurantMockDataList];
};

function App() {
  const restaurantList = getInitialRestaunrantList();

  const { sortedList, setCategory, setFilter } = useSortedRestaurantList({ wholeList: restaurantList });

  const categoryOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value as SelectorCategory;
    setCategory(selectedCategory);
  };

  const filterOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value as SelectorFilter;
    setFilter(selectedFilter);
  };

  return (
    <>
      <Header />
      <div className="restaurant-filter-container">
        <Selector<SelectorCategory> optionList={CATEGORY_OPTIONS} onChange={categoryOnChange} />
        <Selector<SelectorFilter> optionList={FILTER_OPTIONS} onChange={filterOnChange} />
      </div>
      <ItemList itemList={sortedList} />
    </>
  );
}

export default App;
