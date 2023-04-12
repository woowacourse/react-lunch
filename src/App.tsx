import React from 'react';
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

const restaurantMockDataList = parseJson<Array<restaurant>>(JSON.stringify(mockData.restaurantList));
const currentList = sortingByFilter('이름순', restaurantMockDataList);

class App extends React.Component {
  state: appState = {
    category: '전체',
    filter: '이름순',
    wholeList: restaurantMockDataList,
    currentList: currentList,
  };

  categoryOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    if (!this.isFilterOptions<selectorCategory>(value, CATEGORY_OPTIONS)) return;

    const { filter } = this.state;

    const categortSotredList = sortingByCategory(value, this.state.wholeList);
    const currentList = sortingByFilter(filter, categortSotredList);

    this.setState({ ...this.state, category: value, currentList });
  }

  filterOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    if (!this.isFilterOptions<selectorFilter>(value, FILTER_OPTIONS)) return;

    const { category } = this.state;

    const filterSortedList = sortingByFilter(value, this.state.wholeList);
    const currentList = sortingByCategory(category, filterSortedList);

    this.setState({ ...this.state, filter: value, currentList });
  }

  isFilterOptions<T extends string>(value: string, arrays: Array<T>): value is T {
    return arrays.includes(value as T);
  }

  render(): React.ReactNode {
    return (
      <>
        <Header />
        <div className="restaurant-filter-container">
          <Selector<selectorCategory>
            selectedValue={this.state.category}
            optionList={CATEGORY_OPTIONS}
            onChange={this.categoryOnChange.bind(this)}
          />
          <Selector<selectorFilter>
            selectedValue={this.state.filter}
            optionList={FILTER_OPTIONS}
            onChange={this.filterOnChange.bind(this)}
          />
        </div>
        <ItemList itemList={this.state.currentList} />
      </>
    );
  }
}

export default App;
