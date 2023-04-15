import { useCallback, useEffect, useState } from 'react';
import { Restaurant } from '../../types';
import { getRestaurantListData } from '../../data/restaurantListData';
import FilterSection from '../FilterSection/FilterSection';
import RestaurantList from '../RestaurantList/RestaurantList';
import Modal from '../common/Modal/Modal';
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { filterAndSortRestaurantList, useRestaurantList } from '../../hooks/useRestaurantList';
import { useContainer as useModal } from '../../hooks/useContainer';

const restaurantListData = filterAndSortRestaurantList(getRestaurantListData());

function Main() {
  const { data: restaurantList, setDataBeforeUnload } = useLocalStorage(restaurantListData);
  const { currentRestaurantList, handleRestaurantFilterChange } = useRestaurantList(restaurantList);
  const {
    isOpen: isModalOpen,
    open: openModal,
    handleCloseClick: handleModalCloseClick,
    handleClosePress: handleModalClosePress,
  } = useModal();

  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      setDataBeforeUnload(restaurantList);
    });
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
        <Modal onClick={handleModalCloseClick} onKeyPress={handleModalClosePress}>
          {selectedRestaurant && <RestaurantDetail restaurant={selectedRestaurant} />}
        </Modal>
      )}
    </main>
  );
}

export default Main;
