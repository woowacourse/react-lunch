import { useEffect } from 'react';
import { saveToLocalStorage } from '../utils/localStorage';
import { getRestaurantListData } from '../data/restaurantListData';
import { filterAndSortRestaurantList } from '../domains/restaurantUtil';
import FilterSection from './FilterSection/FilterSection';
import RestaurantList from './RestaurantList/RestaurantList';
import Modal from './common/Modal/Modal';
import RestaurantDetail from './RestaurantDetail/RestaurantDetail';
import { useRestaurantList } from '../hooks/useRestaurantList';
import { useSelectRestaurant } from '../hooks/useSelectRestaurant';

const restaurantList = filterAndSortRestaurantList(getRestaurantListData());

function Main() {
  const { currentRestaurantList, updateCurrentRestaurantList } = useRestaurantList(restaurantList);
  const { selectedRestaurant, setSelectedRestaurant } = useSelectRestaurant();

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      saveToLocalStorage(restaurantList);
    });
  }, []);

  return (
    <main>
      <FilterSection onChange={updateCurrentRestaurantList} />
      <RestaurantList restaurantList={currentRestaurantList} onItemClick={setSelectedRestaurant} />
      {selectedRestaurant && (
        <Modal onClose={setSelectedRestaurant}>
          <RestaurantDetail restaurant={selectedRestaurant} />
        </Modal>
      )}
    </main>
  );
}

export default Main;
