import React from 'react';
import './App.css';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Selector from './components/Selector';
import mockData from './mockData/restaurantList.json';
import { appState, restaurant } from './utils/interfaces';
import { parseJson } from './utils/json';
import { FILTERS, RESTAURANT_CATEGORY, WHOLE_CATEGORY, selectorCategory, selectorFilter } from './utils/types';

class App extends React.Component {
  state: appState = {
    category: '전체',
    filter: '이름순',
    wholeList: parseJson<Array<restaurant>>(JSON.stringify(mockData.restaurantList)),
    currentList: parseJson<Array<restaurant>>(JSON.stringify(mockData.restaurantList)),
  };

  sortingByCategory(category: selectorCategory) {
    const { wholeList } = this.state;
    if (category === '전체') {
      this.setState({ ...this.state, currentList: wholeList });
      return;
    }

    this.setState({ ...this.state, currentList: wholeList.filter(item => item.category === category) });
  }

  render(): React.ReactNode {
    const categoryOptions = [WHOLE_CATEGORY, ...Object.values(RESTAURANT_CATEGORY)];
    const filterOptions = [...Object.values(FILTERS)];

    return (
      <>
        <Header />
        <div>
          <Selector<selectorCategory>
            selectedValue={this.state.category}
            optionList={categoryOptions}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const { value } = e.target;

              this.sortingByCategory(value as selectorCategory);
            }}
          />
          <Selector<selectorFilter>
            selectedValue={this.state.filter}
            optionList={filterOptions}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const { value } = e.target;
            }}
          />
        </div>
        <ItemList itemList={this.state.currentList} />
      </>
    );
  }
}

export default App;
