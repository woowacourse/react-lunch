import React, { Component } from 'react';
import Header from './Header/Header';
import './App.css';
import FilterListContainer from './FilterListContainer/FilterListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FilterListContainer />
      </div>
    );
  }
}

export default App;
