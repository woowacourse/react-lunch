import { Component } from 'react';
import Header from './components/Header';
import FilterContainer from './components/FilterContainter';
import RestaurantList from './components/RestaurantList';
import Modal from './components/Modal';
import { Restaurant } from './types';
import mockData from './mockData.json';
import './App.css';

export default class App extends Component {
  state = {
    restaurants: mockData as Restaurant[],
  };

  render() {
    return (
      <div className="App">
        <Header />
        <FilterContainer />
        <RestaurantList restaurants={this.state.restaurants} />
        <Modal />
      </div>
    );
  }
}
