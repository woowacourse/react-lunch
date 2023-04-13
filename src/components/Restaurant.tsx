import { Component } from 'react';
import { RestaurantState } from '../types/component';
import { saveToLocalStorage } from '../utils/localStorage';
import { getRestaurantListData } from '../data/restaurantListData';
import { filterAndSortRestaurantList } from '../domains/restaurantUtil';
import FilterSection from './FilterSection';
import RestaurantList from './RestaurantList';
import Modal from './Modal';
import RestaurantDetail from './RestaurantDetail';

class Restaurant extends Component {
  state: RestaurantState;

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
        <Modal
          content={
            this.state.selectedRestaurant && (
              <RestaurantDetail restaurant={this.state.selectedRestaurant} />
            )
          }
          isModalOpen={this.state.isModalOpen}
          onToggle={this.toggleIsModalOpen}
        />
      </main>
    );
  }
}

export default Restaurant;
