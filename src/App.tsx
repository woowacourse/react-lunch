import React, { Component } from 'react';
import Header from './components/common/Header';
import RestaurantList, { CATEGORIES } from './components/restaurant/RestaurantList';
import Modal from './components/restaurant/Modal';

export type Restaurant = {
  category: (typeof CATEGORIES)[keyof typeof CATEGORIES];
  name: string;
  distanceByMinutes: number;
  description: string;
  referenceUrl: string;
};

class App extends Component {
  state = {
    restaurant: null as null | Restaurant,
  };

  setModalRestaurant = (restaurant: Restaurant | null) => {
    this.setState({
      restaurant,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <RestaurantList setModalRestaurant={this.setModalRestaurant} />
        {this.state.restaurant && <Modal {...this.state.restaurant} setModalRestaurant={this.setModalRestaurant} />}
      </React.Fragment>
    );
  }
}

export default App;
