import React, { Component } from 'react';
import Header from './components/common/Header';
import RestaurantList from './components/home/RestaurantList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <RestaurantList />
      </React.Fragment>
    );
  }
}

export default App;
