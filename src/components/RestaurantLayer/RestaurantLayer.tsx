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

const RestaurantLayer = () => {
  const [currentRestaurantList, setCurrentRestaurantList] = useState(restaurantList);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    toggleIsModalOpen();
  };

  const toggleIsModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main>
      <FilterSection onChange={updateCurrentRestaurantList} />
      <RestaurantList restaurantList={currentRestaurantList} onItemClick={updateSelectedRestaurant} />
      <Modal
        content={selectedRestaurant && <RestaurantDetail restaurant={selectedRestaurant} />}
        isModalOpen={isModalOpen}
        onToggle={toggleIsModalOpen}
      />
    </main>
  );
};

export default RestaurantLayer;
