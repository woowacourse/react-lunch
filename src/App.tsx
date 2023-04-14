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
import { localStorageGetItem } from './utils/localStorage';
import { typePredicates } from './utils/typeCheck';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

class App extends React.Component<Props, appState> {
  constructor(props: Props | Readonly<Props>) {
    super(props);

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

    this.state = {
      category: '전체',
      filter: '이름순',
      wholeList,
      currentList,
    };
  }

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
