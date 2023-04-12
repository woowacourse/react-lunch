import React, { Component } from 'react';
import Header from './components/common/Header';
import RestaurantList from './components/restaurant/RestaurantList';
import Modal from './components/restaurant/Modal';

export type Restaurant = {
  category: string;
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
