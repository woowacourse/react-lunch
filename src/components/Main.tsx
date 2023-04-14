import { Component } from 'react';
import { Restaurant } from '../types';
import { saveToLocalStorage } from '../utils/localStorage';
import { getRestaurantListData } from '../data/restaurantListData';
import { filterAndSortRestaurantList } from '../domains/restaurantUtil';
import FilterSection from './FilterSection';
import RestaurantList from './RestaurantList';
import Modal from './Modal';
import RestaurantDetail from './RestaurantDetail';

interface MainState {
  restaurantList: Restaurant[];
  currentRestaurantList: Restaurant[];
  selectedRestaurant: Restaurant | null;
  isModalOpen: boolean;
}

class Main extends Component {
  state: MainState;

  constructor(props: {}) {
    super(props);

    const restaurantList = filterAndSortRestaurantList(getRestaurantListData());

    this.state = {
      restaurantList: restaurantList,
      currentRestaurantList: restaurantList,
      selectedRestaurant: null,
      isModalOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      saveToLocalStorage(this.state.restaurantList);
    });
  }

  updateCurrentRestaurantList = (filter: string, sortBy: string) => {
    const updatedRestaurantList = filterAndSortRestaurantList(
      this.state.restaurantList,
      filter,
      sortBy
    );
    this.setState({ currentRestaurantList: updatedRestaurantList });
  };

  updateSelectedRestaurant = (id: number) => {
    const selectedRestaurant = this.state.currentRestaurantList.find(
      (restaurant) => restaurant.id === id
    );

    if (!selectedRestaurant) return;

    this.setState({ selectedRestaurant });
    this.toggleIsModalOpen();
  };

  toggleIsModalOpen = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
    document.body.classList.toggle('hide-overflow');
  };

  render() {
    return (
      <main>
        <FilterSection onChange={this.updateCurrentRestaurantList} />
        <RestaurantList
          restaurantList={this.state.currentRestaurantList}
          onItemClick={this.updateSelectedRestaurant}
        />
        <Modal isModalOpen={this.state.isModalOpen} onToggle={this.toggleIsModalOpen}>
          {this.state.selectedRestaurant && (
            <RestaurantDetail restaurant={this.state.selectedRestaurant} />
          )}
        </Modal>
      </main>
    );
  }
}

export default Main;
