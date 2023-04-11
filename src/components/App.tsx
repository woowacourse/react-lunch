import { Component } from 'react';
import Header from './Header/Header';
import RestaurantFilter from './RestaurantFilter/RestaurantFilter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RestaurantFilter />
      </div>
    );
  }
}
