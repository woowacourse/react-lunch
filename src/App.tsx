import React, { Component } from 'react';
import Header from './components/Header';
import './styles/App.css';
import { RestaurantInfo } from './types/restaurantInfo';
import {
  getSavedRestaurantList,
  hasSavedRestaurantList,
  saveNewRestaurantList,
} from './domain/initializeRestaurantList';
import RestaurantList from './components/RestaurantList';
import Modal from './components/Modal';
import RestaurantDetail from './components/RestaurantDetail';

class App extends Component<object, { restaurantList: RestaurantInfo[]; clickedRestaurant: RestaurantInfo | null }> {
  constructor(props: object) {
    super(props);

    this.state = {
      restaurantList: [] as RestaurantInfo[],
      clickedRestaurant: null,
    };

    this.setClickedRestaurant = this.setClickedRestaurant.bind(this);
    this.resetClickedRestaurant = this.resetClickedRestaurant.bind(this);
  }

  async componentDidMount() {
    if (!hasSavedRestaurantList()) await saveNewRestaurantList();

    const list = getSavedRestaurantList();

    this.setState({
      restaurantList: list,
    });
  }

  setClickedRestaurant(restaurantInfo: RestaurantInfo) {
    this.setState({
      clickedRestaurant: restaurantInfo,
    });
  }

  resetClickedRestaurant() {
    this.setState({
      clickedRestaurant: null,
    });
  }

  render() {
    const { restaurantList, clickedRestaurant } = this.state;
    return (
      <div className="app">
        <Header />
        <RestaurantList onClick={this.setClickedRestaurant} restaurantList={restaurantList} />
        {clickedRestaurant && (
          <Modal onClose={this.resetClickedRestaurant}>
            <RestaurantDetail onCloseClick={this.resetClickedRestaurant} restaurantInfo={clickedRestaurant} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
