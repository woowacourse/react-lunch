import { useCallback, useEffect, useState } from 'react';
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

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      saveToLocalStorage(restaurantList);
    });
  }, []);

  const updateCurrentRestaurantList = useCallback((displayStatus: FilterOption) => {
    const { category, sortBy } = displayStatus;
    const updatedRestaurantList = filterAndSortRestaurantList(restaurantList, category, sortBy);
    setCurrentRestaurantList(updatedRestaurantList);
  }, []);

  const updateSelectedRestaurant = useCallback((restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  }, []);

  return (
    <main>
      <FilterSection onChange={updateCurrentRestaurantList} />
      <RestaurantList
        restaurantList={currentRestaurantList}
        onItemClick={updateSelectedRestaurant}
      />
      {selectedRestaurant && (
        <Modal onClose={() => setSelectedRestaurant(null)}>
          <RestaurantDetail restaurant={selectedRestaurant} />
        </Modal>
      )}
    </main>
  );
}

export default Main;
