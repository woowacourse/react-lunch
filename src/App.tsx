import { Category, Restaurant, SortingType } from './types/restaurant';

import React from 'react';

import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';

import mockData from './mockData.json';

interface Props {}

interface State {
  restaurants: Restaurant[];
  category: string;
  sortingType: SortingType;
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
      category: '전체',
      sortingType: '이름순',
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

  setCategory = (category: Category) => {
    this.setState({
      category
    });
  };

  setSortingType = (sortingType: SortingType) => {
    this.setState({
      sortingType
    });
  };

  filterRestaurants = () => {
    const { category, sortingType } = this.state;

    const restaurants = this.state.restaurants.filter(
      restaurant => category === '전체' || restaurant.category === category
    );

    const getPivot = (restaurant: Restaurant) => {
      return sortingType === '이름순' ? restaurant.name : restaurant.distance;
    };

    return restaurants.sort((a, b) => {
      const A = getPivot(a);
      const B = getPivot(b);
      if (A > B) return 1;
      if (A < B) return -1;
      return 0;
    });
  };

  render() {
    return (
      <div className="App">
        <Header />

        <RestaurantList
          restaurants={this.filterRestaurants()}
          openModal={this.openModal}
          setCategory={this.setCategory}
          setSortingType={this.setSortingType}
        />

        {this.state.isModalOpen && (
          <RestaurantDetail
            closeModal={this.closeModal}
            restaurant={
              mockData.restaurants.find(
                restaurant => restaurant.id === this.state.detailId
              ) as Restaurant
            }
          />
        )}
      </div>
    );
  }
}

export default App;
