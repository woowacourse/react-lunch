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
  categoryRef: React.RefObject<HTMLSelectElement>;
  sortRef: React.RefObject<HTMLSelectElement>;
  constructor(props: Props | Readonly<Props>) {
    super(props);

    this.categoryRef = React.createRef();
    this.sortRef = React.createRef();

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

  categoryOnChange() {
    const value = this.categoryRef.current?.value ?? '전체';

    if (!this.isFilterOptions<selectorCategory>(value, CATEGORY_OPTIONS)) return;

    const { filter } = this.state;

    const categortSortedList = sortingByCategory(value, this.state.wholeList);
    const currentList = sortingByFilter(filter, categortSortedList);

    this.setState({ ...this.state, category: value, currentList });
  }

  filterOnChange() {
    const value = this.sortRef.current?.value ?? '이름순';

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
            filterRef={this.categoryRef}
            selectedValue={this.state.category}
            optionList={CATEGORY_OPTIONS}
            onChange={this.categoryOnChange.bind(this)}
          />
          <Selector<selectorFilter>
            filterRef={this.sortRef}
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
