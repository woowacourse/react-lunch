import { Category, Restaurant, SortingType } from './types/restaurant';

import React from 'react';
import { Header, RestaurantList, RestaurantDetail } from './components';

import mockData from './mockData.json';

interface Props {}

interface State {
  restaurants: Restaurant[];
  isModalOpen: boolean;
  detailId: Restaurant['id'];
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    if (!localStorage.getItem('restaurants')) {
      localStorage.setItem('restaurants', JSON.stringify(mockData.restaurants));
    }

    const restaurants = JSON.parse(localStorage.getItem('restaurants') || '[]');
    this.state = {
      restaurants,
      isModalOpen: false,
      detailId: '1'
    };

    window.addEventListener('keyup', ({ key }) => {
      if (this.state.isModalOpen && key === 'Escape') {
        this.closeModal();
      }
    });
  }

  openModal = (id: Restaurant['id']) => {
    this.setState({
      detailId: id,
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    const { restaurants, detailId } = this.state;
    return (
      <div className="App">
        <Header />
        <RestaurantList restaurants={restaurants} openModal={this.openModal} />
        {this.state.isModalOpen && (
          <RestaurantDetail
            closeModal={this.closeModal}
            restaurant={restaurants.find((restaurant) => restaurant.id === detailId) as Restaurant}
          />
        )}
      </div>
    );
  }
}

export default App;
