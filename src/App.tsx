import { Component } from 'react';

import './css/App.css';

import Header from './components/Header';
import MainLayout from './components/MainLayout';
import RestaurantDetailModal from './components/RestaurantDetailModal';

import { Restaurant } from './domain/type';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

interface State {
  restaurants: Restaurant[];
  restaurantId: string;
  isModalOpened: boolean;
}

class App extends Component {
  state: State = {
    restaurants: [],
    restaurantId: '',
    isModalOpened: false,
  };

  async componentDidMount() {
    const localStorageData = getLocalStorage('restaurants');

    if (localStorageData) {
      this.setState({ restaurants: localStorageData });
      return;
    }

    const response = await fetch('./mockData.json');
    const data = await response.json();

    setLocalStorage('restaurants', data);
    this.setState({ restaurants: data });
  }

  handleRestaurantClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    const item = target.closest('.restaurant') as HTMLLIElement;
    const restaurantId = item.dataset.id;

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
