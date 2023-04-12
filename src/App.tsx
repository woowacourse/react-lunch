import { Component, ReactNode } from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList';
import { State } from './types';
import { getRestaurantListData } from './data/restaurantListData';

class App extends Component {
  state: State;

  constructor(props: {}) {
    super(props);

    this.state = {
      restaurantList: getRestaurantListData(),
      selectedRestaurant: 0,
      currentDisplayStatus: {
        category: '',
        sortBy: '',
      },
    };
  }

  render(): ReactNode {
    return (
      <div className="App">
        {/* <Header></Header>
        <FilterSection></FilterSection> */}
        <RestaurantList restaurantList={this.state.restaurantList} />
      </div>
    );
  }
}

export default App;
