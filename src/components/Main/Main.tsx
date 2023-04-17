import { useEffect, useState } from 'react';
import { Restaurant } from '../../types';
import { restaurantList } from '../../data/restaurantListData';
import { saveToLocalStorage } from '../../utils/localStorage';
import FilterSection from '../FilterSection/FilterSection';
import RestaurantList from '../RestaurantList/RestaurantList';
import Modal from '../Modal/Modal';
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';

const Main = () => {
  const [currentRestaurantList, setCurrentRestaurantList] = useState(restaurantList);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      saveToLocalStorage(restaurantList);
    });
  }, []);

  return (
    <main>
      <FilterSection setCurrentRestaurantList={setCurrentRestaurantList} />
      <RestaurantList restaurantList={currentRestaurantList} setSelectedRestaurant={setSelectedRestaurant} />
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
