import { useEffect, useState } from 'react';

import './css/App.css';

import Header from './components/Header';
import MainLayout from './components/MainLayout';
import RestaurantDetailModal from './components/RestaurantDetailModal';

import type { Restaurant } from './domain/type';

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
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [modalRestaurant, setModalRestaurant] = useState<Restaurant>();

  const openRestaurantInfoModal = (restaurant: Restaurant) => {
    setModalRestaurant(restaurant);
    setIsModalOpened(true);
  };

  const handleModalClose = () => {
    setIsModalOpened(false);
  };

  return {
    modalRestaurant,
    isModalOpened,
    openRestaurantInfoModal,
    handleModalClose,
  };
};

export default function App() {
  const { restaurants } = useRestaurantState();

  const {
    modalRestaurant,
    isModalOpened,
    openRestaurantInfoModal,
    handleModalClose,
  } = useModalState();

  return (
    <div className="App">
      <Header />
      <MainLayout
        restaurants={restaurants}
        onClickRestaurant={openRestaurantInfoModal}
      />
      {isModalOpened && modalRestaurant && (
        <RestaurantDetailModal
          restaurant={modalRestaurant}
          onCloseModal={handleModalClose}
        />
      )}
    </div>
  );
}
