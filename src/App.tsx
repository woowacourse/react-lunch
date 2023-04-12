import React from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Selector from './components/Selector';
import mockData from './mockData/restaurantList.json';
import { appState, restaurant } from './utils/interfaces';
import { parseJson } from './utils/json';
import { FILTERS, RESTAURANT_CATEGORY, WHOLE_CATEGORY, selectorCategory, selectorFilter } from './utils/types';
import { sortingByCategory, sortingByFilter } from './domain/restaurantSort';

const restaurantMockDataList = parseJson<Array<restaurant>>(JSON.stringify(mockData.restaurantList));
const currentList = sortingByFilter('이름순', restaurantMockDataList);

class App extends React.Component {
  state: appState = {
    category: '전체',
    filter: '이름순',
    wholeList: restaurantMockDataList,
    currentList: currentList,
  };

  isFilterOptions<T extends string>(value: string, arrays: Array<T>): value is T {
    return arrays.includes(value as T);
  }

  render(): React.ReactNode {
    const categoryOptions = [WHOLE_CATEGORY, ...Object.values(RESTAURANT_CATEGORY)];
    const filterOptions = [...Object.values(FILTERS)];

    return (
      <>
        <Header />
        <div className="restaurant-filter-container">
          <Selector<selectorCategory>
            selectedValue={this.state.category}
            optionList={categoryOptions}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const { value } = e.target;
              if (!this.isFilterOptions<selectorCategory>(value, categoryOptions)) return;

              const { filter } = this.state;

              const categortSotredList = sortingByCategory(value, this.state.wholeList);
              const currentList = sortingByFilter(filter, categortSotredList);

              this.setState({ ...this.state, category: value, currentList });
            }}
          />
          <Selector<selectorFilter>
            selectedValue={this.state.filter}
            optionList={filterOptions}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const { value } = e.target;
              if (!this.isFilterOptions<selectorFilter>(value, filterOptions)) return;

              const { category } = this.state;

              const filterSotredList = sortingByFilter(value, this.state.wholeList);
              const currentList = sortingByCategory(category, filterSotredList);

              this.setState({ ...this.state, filter: value, currentList });
            }}
          />
        </div>
        <ItemList itemList={this.state.currentList} />
      </>
    );
  }
}

export default App;
