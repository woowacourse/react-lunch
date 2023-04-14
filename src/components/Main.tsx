import { useEffect, useState } from 'react';
import { Restaurant } from '../types';
import { saveToLocalStorage } from '../utils/localStorage';
import { getRestaurantListData } from '../data/restaurantListData';
import FilterSection from './FilterSection/FilterSection';
import RestaurantList from './RestaurantList/RestaurantList';
import Modal from './common/Modal/Modal';
import RestaurantDetail from './RestaurantDetail/RestaurantDetail';
import { filterAndSortRestaurantList, useRestaurantList } from '../hooks/useRestaurantList';
import { useModal } from '../hooks/useModal';

const restaurantList = filterAndSortRestaurantList(getRestaurantListData());

function Main() {
  const { currentRestaurantList, updateCurrentRestaurantList } = useRestaurantList(restaurantList);
  const { isModalOpen, openModal, handleModalCloseClick, handleModalClosePress } = useModal();

  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      saveToLocalStorage(restaurantList);
    });
  }, []);

  const handleRestaurantItem = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    openModal();
  };

  return (
    <main>
      <FilterSection onChange={updateCurrentRestaurantList} />
      <RestaurantList restaurantList={currentRestaurantList} onItemClick={handleRestaurantItem} />

      {isModalOpen && (
        <Modal onClick={handleModalCloseClick} onKeyPress={handleModalClosePress}>
          {selectedRestaurant && <RestaurantDetail restaurant={selectedRestaurant} />}
        </Modal>
      )}
    </main>
  );
}

export default Main;
