import { useEffect, useState } from 'react';

import './css/App.css';

import Header from './components/Header';
import MainLayout from './components/MainLayout';
import RestaurantDetailModal from './components/RestaurantDetailModal';

import { Restaurant, RestaurantId } from './domain/type';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { getMockData } from './domain/mockData';
import { LOCAL_STORAGE } from './CONSTANT';

const state = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [restaurantId, setRestaurantId] = useState('');
  const [isModalOpened, setIsModalOpened] = useState(false);

  const fetchData = async () => {
    const response = await getMockData();

    if (!response.ok) {
      throw new Error('Error fetching data');
    }

    const data = await response.json();

    setRestaurants(data);
    setLocalStorage(LOCAL_STORAGE.restaurantData, data);
  };

  useEffect(() => {
    const localStorageData = getLocalStorage(LOCAL_STORAGE.restaurantData);

    if (localStorageData) {
      setRestaurants(localStorageData);
      return;
    }

    fetchData();
  }, []);

  const openRestaurantInfoModal = (restaurantId: string) => {
    setRestaurantId(restaurantId);
    setIsModalOpened(true);
  };

  const handleModalClose = () => {
    setIsModalOpened(false);
  };

  return {
    restaurants,
    restaurantId,
    isModalOpened,
    openRestaurantInfoModal,
    handleModalClose,
  };
};

export default function App() {
  const {
    restaurants,
    restaurantId,
    isModalOpened,
    openRestaurantInfoModal,
    handleModalClose,
  } = state();

  const restaurant = restaurants.find(
    (restaurant: Restaurant) => restaurant.id === restaurantId,
  );

  return (
    <div className="App">
      <Header />
      <MainLayout
        restaurants={restaurants}
        onClickRestaurant={openRestaurantInfoModal}
      />
      {isModalOpened && restaurant ? (
        <RestaurantDetailModal
          restaurant={restaurant}
          onCloseModal={handleModalClose}
        />
      ) : null}
    </div>
  );
}
