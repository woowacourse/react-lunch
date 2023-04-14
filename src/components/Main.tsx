import { useState } from 'react';
import { Restaurant } from '../types';
import { saveToLocalStorage } from '../utils/localStorage';
import { getRestaurantListData } from '../data/restaurantListData';
import { filterAndSortRestaurantList } from '../domains/restaurantUtil';
import FilterSection from './FilterSection';
import RestaurantList from './RestaurantList';
import Modal from './Modal';
import RestaurantDetail from './RestaurantDetail';

const restaurantList = filterAndSortRestaurantList(getRestaurantListData());

function Main() {
  const [currentRestaurantList, setCurrentRestaurantList] = useState(restaurantList);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /*
  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      saveToLocalStorage(this.state.restaurantList);
    });
  }
  */

  const updateCurrentRestaurantList = (filter: string, sortBy: string) => {
    const updatedRestaurantList = filterAndSortRestaurantList(restaurantList, filter, sortBy);
    setCurrentRestaurantList(updatedRestaurantList);
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('hide-overflow');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('hide-overflow');
  };

  const updateSelectedRestaurant = (id: number) => {
    const selected = currentRestaurantList.find((restaurant) => restaurant.id === id);

    if (!selected) return;

    setSelectedRestaurant(selected);
    openModal();
  };

  return (
    <main>
      <FilterSection onChange={updateCurrentRestaurantList} />
      <RestaurantList
        restaurantList={currentRestaurantList}
        onItemClick={updateSelectedRestaurant}
      />
      <Modal isModalOpen={isModalOpen} close={closeModal}>
        {selectedRestaurant && <RestaurantDetail restaurant={selectedRestaurant} />}
      </Modal>
    </main>
  );
}

export default Main;
