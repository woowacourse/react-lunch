import React, { Component } from 'react';
import Header from './components/Header';
import './styles/App.css';
import { RestaurantInfo } from './types/restaurantInfo';
import { getSavedRestaurantList, hasSavedRestaurantList } from './domain/initializeRestaurantList';
import { saveNewRestaurantList } from './domain/initializeRestaurantList';
import RestaurantList from './components/RestaurantList';

class App extends Component<object, { restaurantList: RestaurantInfo[] }> {
  constructor(props: object) {
    super(props);

    this.state = {
      restaurantList: [] as RestaurantInfo[],
    };
  }

  async componentDidMount() {
    if (!hasSavedRestaurantList()) await saveNewRestaurantList();

    const list = getSavedRestaurantList();

    this.setState({
      restaurantList: list,
    });
  }

  render() {
    const { restaurantList } = this.state;
    return (
      <div className="app">
        <Header />
        <RestaurantList restaurantList={restaurantList} />
      </div>
    );
  }
}

export default App;
