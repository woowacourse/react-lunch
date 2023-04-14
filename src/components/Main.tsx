import { useEffect } from 'react';
import { saveToLocalStorage } from '../utils/localStorage';
import { getRestaurantListData } from '../data/restaurantListData';
import FilterSection from './FilterSection/FilterSection';
import RestaurantList from './RestaurantList/RestaurantList';
import Modal from './common/Modal/Modal';
import RestaurantDetail from './RestaurantDetail/RestaurantDetail';
import { filterAndSortRestaurantList, useRestaurantList } from '../hooks/useRestaurantList';
import { useSelectRestaurant } from '../hooks/useSelectRestaurant';
import { useModal } from '../hooks/useModal';
import { Restaurant } from '../types';

const restaurantList = filterAndSortRestaurantList(getRestaurantListData());

function Main() {
  const { currentRestaurantList, updateCurrentRestaurantList } = useRestaurantList(restaurantList);
  const { selectedRestaurant, setSelectedRestaurant } = useSelectRestaurant();
  const { isModalOpen, openModal, closeModal } = useModal();

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
        <Modal close={closeModal}>
          {selectedRestaurant && <RestaurantDetail restaurant={selectedRestaurant} />}
        </Modal>
      )}
    </main>
  );
}

export default Main;
