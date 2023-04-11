import { Component, ReactNode } from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList';
import { State } from './types';

class App extends Component {
  state: State = {
    restaurantList: [],
    selectedRestaurant: 0,
    currentDisplayStatus: {
      category: '',
      sortBy: '',
    },
  };

  render(): ReactNode {
    return (
      <div className="App">
        {/* <Header></Header>
        <FilterSection></FilterSection> */}
        <RestaurantList></RestaurantList>
      </div>
    );
  }
}

export default App;
