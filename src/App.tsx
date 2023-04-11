import React, { Component } from 'react';
import Header from './Header/Header';
import FilterList from './FilterList/FilterList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="restaurant-filter-container">
          <FilterList
            name={['전체', '한식', '중식', '양식', '일식', '아시안', '기타']}
          />
          <FilterList name={['이름순', '거리순']} />
        </section>
      </div>
    );
  }
}

export default App;
