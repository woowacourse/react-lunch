import React, { Component } from 'react';
import Header from './Header/Header';
import './App.css';
import FilterListContainer from './FilterListContainer/FilterListContainer';
import RestaurantList from './RestaurantList/RestaurantList';

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
