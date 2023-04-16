import { useEffect, useState } from 'react';

import './css/App.css';

import Header from './components/Header';
import MainLayout from './components/MainLayout';
import RestaurantDetailModal from './components/RestaurantDetailModal';

import { Restaurant, RestaurantId } from './domain/type';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { getMockData } from './domain/mockData';
import { LOCAL_STORAGE } from './CONSTANT';

const setInitialData = async (
  callback: React.Dispatch<React.SetStateAction<Restaurant[]>>,
) => {
  const localStorageData = getLocalStorage(LOCAL_STORAGE.restaurantData);

  if (localStorageData) {
    callback(localStorageData);
    return;
  }

  const data = await getMockData();

  callback(data);
  setLocalStorage(LOCAL_STORAGE.restaurantData, data);
};

const useRestaurantState = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    setInitialData(setRestaurants);
  }, []);

  return {
    restaurants,
  };
};

const useModalState = () => {
  const [restaurantId, setRestaurantId] = useState<RestaurantId>('');
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const openRestaurantInfoModal = (restaurantId: string) => {
    setRestaurantId(restaurantId);
    setIsModalOpened(true);
  };

  const handleModalClose = () => {
    setIsModalOpened(false);
  };

  return {
    restaurantId,
    isModalOpened,
    openRestaurantInfoModal,
    handleModalClose,
  };
};

export default function App() {
  const { restaurants } = useRestaurantState();

  const {
    restaurantId,
    isModalOpened,
    openRestaurantInfoModal,
    handleModalClose,
  } = useModalState();

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
