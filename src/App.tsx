import { Component, ReactNode } from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList';
import { Restaurant, State } from './types';
import mockData from './data/mockRestaurantData.json';

class App extends Component {
  state: State = {
    restaurantList: mockData.restaurants as Restaurant[], // mock data get data ?? mock data
    selectedRestaurant: 0,
    currentDisplayStatus: {
      category: '',
      sortBy: '',
    },
  };

  render(): ReactNode {
    const { restaurantList } = this.state;

    return (
      <div className="App">
        {/* <Header></Header>
        <FilterSection></FilterSection> */}
        <RestaurantList restaurantList={restaurantList} />
      </div>
    );
  }
}

export default App;
