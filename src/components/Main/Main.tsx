import { useCallback, useEffect, useState } from 'react';
import { Restaurant } from '../../types';
import { getRestaurantListData } from '../../data/restaurantListData';
import FilterSection from '../FilterSection/FilterSection';
import RestaurantList from '../RestaurantList/RestaurantList';
import Modal from '../common/Modal/Modal';
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { filterAndSortRestaurantList, useRestaurantList } from '../../hooks/useRestaurantList';
import { useModal } from '../../hooks/useModal';

const restaurantListData = filterAndSortRestaurantList(getRestaurantListData());

function Main() {
  const { data: restaurantList, setDataBeforeUnload } = useLocalStorage(restaurantListData);
  const { currentRestaurantList, handleRestaurantFilterChange } = useRestaurantList(restaurantList);
  const { isModalOpen, openModal, closeModal, handleModalClosePress } = useModal();

  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    setDataBeforeUnload(restaurantList);
  }, [restaurantList, setDataBeforeUnload]);

  const updateSelectedRestaurant = useCallback(
    (restaurant: Restaurant) => {
      setSelectedRestaurant(restaurant);
      openModal();
    },
    [openModal]
  );

  return (
    <main>
      <FilterSection onChange={handleRestaurantFilterChange} />
      <RestaurantList
        restaurantList={currentRestaurantList}
        onItemClick={updateSelectedRestaurant}
      />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} close={closeModal} onKeyDown={handleModalClosePress}>
          {selectedRestaurant && (
            <RestaurantDetail restaurant={selectedRestaurant} onClick={closeModal} />
          )}
        </Modal>
      )}
    </main>
  );
}

export default Main;
