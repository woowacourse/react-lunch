import React, { Component } from 'react';
import Header from './components/common/Header';
import RestaurantList from './components/restaurant/RestaurantList';
import Modal from './components/restaurant/Modal';
import { Restaurant } from './@types/type';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { LOCAL_STORAGE_KEY } from './constants';
import mockData from './mockData.json';

class App extends Component {
  state = {
    modalRestaurantID: null as null | number,
    restaurantList: mockData as Restaurant[],
  };

  componentDidMount() {
    const savedRestaurants = getLocalStorage(LOCAL_STORAGE_KEY.RESTAURANT);

    if (savedRestaurants) {
      this.setState({
        restaurantList: savedRestaurants,
      });
    } else setLocalStorage(LOCAL_STORAGE_KEY.RESTAURANT, this.state.restaurantList);
  }

  setModalRestaurantId = (modalRestaurantID: number | null) => {
    this.setState({
      modalRestaurantID,
    });
  };

  findModalRestaurant = () => {
    return this.state.restaurantList.find((restaurant) => restaurant.id === this.state.modalRestaurantID)!;
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <RestaurantList restaurantList={this.state.restaurantList} setModalRestaurantId={this.setModalRestaurantId} />
        {this.state.modalRestaurantID && (
          <Modal restaurant={this.findModalRestaurant()} setModalRestaurantId={this.setModalRestaurantId} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
