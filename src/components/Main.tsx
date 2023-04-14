import { useEffect, useState } from 'react';
import { FilterOption, Restaurant } from '../types';
import { saveToLocalStorage } from '../utils/localStorage';
import { getRestaurantListData } from '../data/restaurantListData';
import { filterAndSortRestaurantList } from '../domains/restaurantUtil';
import FilterSection from './FilterSection/FilterSection';
import RestaurantList from './RestaurantList/RestaurantList';
import Modal from './common/Modal/Modal';
import RestaurantDetail from './RestaurantDetail/RestaurantDetail';

const restaurantList = filterAndSortRestaurantList(getRestaurantListData());

function Main() {
  const [currentRestaurantList, setCurrentRestaurantList] = useState(restaurantList);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      saveToLocalStorage(restaurantList);
    });
  }, []);

  const updateCurrentRestaurantList = (displayStatus: FilterOption) => {
    const { category, sortBy } = displayStatus;
    const updatedRestaurantList = filterAndSortRestaurantList(restaurantList, category, sortBy);
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
