import React, { Component } from 'react';
import Header from './Header/Header';
import FilterListContainer from './FilterListContainer/FilterListContainer';
import RestaurantList from './RestaurantList/RestaurantList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FilterListContainer />
        <RestaurantList />
      </div>
    );
  }
}

export default App;
