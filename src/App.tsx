import React, { Component } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from './components/Header';
import { RestaurantList } from './components/RestaurantList';
import dummyList from './mockData.json';
import { Restaurant } from './type';
import { Modal } from './components/modal/Modal';
import { RestaurantDetail } from './components/modal/RestaurantDetail';

interface AppState {
  isOpen: boolean;
  list: Restaurant[];
  selectedItem: Restaurant | null;
}

export class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);

    const localStorageData = localStorage.getItem('restaurantList');
    const restaurantList =
      localStorageData !== null ? JSON.parse(localStorageData) : dummyList;

    this.state = {
      isOpen: false,
      list: restaurantList as Restaurant[],
      selectedItem: null,
    };
  }

  toggleIsOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  clickRestaurantItem(e: any) {
    const selectedId = e.target.closest('li').id;
    const selectedRestaurant = this.state.list.find(
      ({ id }) => id === selectedId
    );

    if (selectedRestaurant === undefined) return;

    this.setState({ selectedItem: selectedRestaurant });
    this.toggleIsOpen();
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <RestaurantList
          list={this.state.list}
          clickRestaurantItem={this.clickRestaurantItem.bind(this)}
        />
        <Modal
          isOpen={this.state.isOpen}
          children={
            this.state.selectedItem && (
              <RestaurantDetail info={this.state.selectedItem} />
            )
          }
          toggleOpen={this.toggleIsOpen.bind(this)}
        />
      </div>
    );
  }
}
