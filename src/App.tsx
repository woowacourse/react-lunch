import { Category, Restaurant, SortingType } from './types/restaurant';

import React from 'react';
import { Header, RestaurantList, RestaurantDetail } from './components';

import filterRestaurants from './domain/filterRestaurants';
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

  render() {
    const { restaurants, category, sortingType } = this.state;
    return (
      <div className="App">
        <Header />

        <RestaurantList
          restaurants={filterRestaurants(restaurants, category, sortingType)}
          openModal={this.openModal}
          setCategory={this.setCategory}
          setSortingType={this.setSortingType}
        />

        {this.state.isModalOpen && (
          <RestaurantDetail
            closeModal={this.closeModal}
            restaurant={
              mockData.restaurants.find(
                (restaurant) => restaurant.id === this.state.detailId
              ) as Restaurant
            }
          />
        )}
      </div>
    );
  }
}

export default App;
