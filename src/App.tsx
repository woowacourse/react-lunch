import { Component } from 'react';

import './css/App.css';

import Header from './components/Header';
import MainLayout from './components/MainLayout';
import RestaurantDetailModal from './components/RestaurantDetailModal';

import { Restaurant, RestaurantId } from './domain/type';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { getMockData } from './domain/mockData';
import { LOCAL_STORAGE } from './CONSTANT';

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

  async componentDidMount() {
    const localStorageData = getLocalStorage(LOCAL_STORAGE.restaurantData);

    if (localStorageData) {
      this.setState({ ...this.state, restaurants: localStorageData });
      return;
    }

    const data = await getMockData();

    setLocalStorage(LOCAL_STORAGE.restaurantData, data);
    this.setState({ ...this.state, restaurants: data });
  }

  openRestaurantInfoModal = (restaurantId: string) => {
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
          onClickRestaurant={this.openRestaurantInfoModal}
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
