import { Component } from 'react';
import Header from './components/Header';
import FilterContainer from './components/FilterContainer';
import RestaurantList from './components/RestaurantList';
import Modal from './components/Modal';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FilterContainer />
        <RestaurantList />
        <Modal />
      </div>
    );
  }
}
