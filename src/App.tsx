import React, { Component } from 'react';
import Header from './Header/Header';
import FilterListContainer from './FilterListContainer/FilterListContainer';
import RestaurantList from './RestaurantList/RestaurantList';

import './App.css';

interface AppProps {}

interface AppState {
  selectedCategory: string;
  selectedSort: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      selectedCategory: '전체',
      selectedSort: '이름순',
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <FilterListContainer
          selectedCategory={this.state.selectedCategory}
          selectedSort={this.state.selectedSort}
          categoryEvent={this.handleCategoryChange}
          sortEvent={this.handleSortChange}
        />
        <RestaurantList
          selectedCategory={this.state.selectedCategory}
          selectedSort={this.state.selectedSort}
        />
      </div>
    );
  }

  handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      ...this.state,
      selectedCategory: e.target.value,
    });
  };

  handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      ...this.state,
      selectedSort: e.target.value,
    });
  };
}

export default App;
