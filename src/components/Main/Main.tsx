import { useEffect, useState } from 'react';
import { FilterOption, Restaurant } from '../../types';
import { getRestaurantListData } from '../../data/restaurantListData';
import { saveToLocalStorage } from '../../utils/localStorage';
import { filterAndSortRestaurantList } from '../../hooks/restaurantUtil';
import FilterSection from '../FilterSection/FilterSection';
import RestaurantList from '../RestaurantList/RestaurantList';
import Modal from '../Modal/Modal';
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';

const restaurantList = filterAndSortRestaurantList(getRestaurantListData());

const Main = () => {
  const [currentRestaurantList, setCurrentRestaurantList] = useState(restaurantList);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      saveToLocalStorage(restaurantList);
    });
  }, []);

  const updateCurrentRestaurantList = ({ category, sortBy }: FilterOption) => {
    setCurrentRestaurantList(filterAndSortRestaurantList(restaurantList, category, sortBy));
  };

  const updateSelectedRestaurant = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <main>
      <FilterSection onChange={updateCurrentRestaurantList} />
      <RestaurantList restaurantList={currentRestaurantList} onItemClick={updateSelectedRestaurant} />
      {selectedRestaurant && (
        <Modal
          content={<RestaurantDetail restaurant={selectedRestaurant} />}
          setSelectedRestaurant={setSelectedRestaurant}
        />
      )}
    </main>
  );
};

export default Main;
