import { Component } from 'react';

import './css/App.css';

import Header from './components/Header';
import MainLayout from './components/MainLayout';
import RestaurantDetailModal from './components/RestaurantDetailModal';

import { Restaurant, RestaurantId } from './domain/type';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { getMockData } from './domain/mockData';

interface State {
  restaurants: Restaurant[];
  restaurantId: RestaurantId;
  isModalOpened: boolean;
}

class App extends Component {
  state: State = {
    restaurants: [],
    restaurantId: '',
    isModalOpened: false,
  };

  // async componentDidMount() {
  //   const localStorageData = getLocalStorage('restaurants');
  //   console.log('aaa');

  //   if (localStorageData) {
  //     this.setState({ restaurants: localStorageData });
  //     return;
  //   }

  //   const response = await fetch('./mockData.json');
  //   const data = await response.json();

  //   console.log('a', data);

  //   setLocalStorage('restaurants', data);
  //   this.setState({ restaurants: data });
  // }

  async componentDidMount() {
    const localStorageData = getLocalStorage('restaurants');

    if (localStorageData) {
      this.setState({ ...this.state, restaurants: localStorageData });
      return;
    }

    const data = await getMockData();

    setLocalStorage('restaurants', data);
    this.setState({ ...this.state, restaurants: data });
  }

  setRestaurantId = (restaurantId: string) => {
    this.setState({
      ...this.state,
      restaurantId,
      isModalOpened: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      ...this.state,
      isModalOpened: false,
    });
  };

  render() {
    const restaurant = this.state.restaurants.find(
      (restaurant: Restaurant) => restaurant.id === this.state.restaurantId,
    );

    return (
      <div className="App">
        <Header />
        <MainLayout
          restaurants={this.state.restaurants}
          onClickRestaurant={this.setRestaurantId}
        />
        {this.state.isModalOpened ? (
          <RestaurantDetailModal
            restaurant={restaurant}
            onCloseModal={this.handleModalClose}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
