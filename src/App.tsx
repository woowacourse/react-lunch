import React, { Component } from 'react';
import Header from './components/common/Header';
import RestaurantList from './components/restaurant/RestaurantList';
import Modal from './components/restaurant/Modal';
import { Restaurant } from './@types/type';

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
        {this.state.restaurant && (
          <Modal restaurant={this.state.restaurant} setModalRestaurant={this.setModalRestaurant} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
