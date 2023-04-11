import { Component } from 'react';
import Header from './components/Header';
import FilterContainer from './components/FilterContainter';
import RestaurantList from './components/RestaurantList';
import Modal from './components/Modal';
import './App.css';
import { Restaurant } from './types';

const mockData = [
  {
    category: '중식',
    name: '차이나타운',
    id: 123,
    description: '토끼의 중식 맛집',
    distance: '10',
    link: '',
  },
] as Restaurant[];

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FilterContainer />
        <RestaurantList restaurants={mockData} />
        <Modal />
      </div>
    );
  }
}
