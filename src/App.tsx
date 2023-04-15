import React, { useEffect, useState } from 'react';
import Header from './components/common/Header';
import RestaurantList from './components/restaurant/RestaurantList';
import Modal from './components/common/Modal';
import { Restaurant } from './@types/type';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { LOCAL_STORAGE_KEY } from './constants';
import mockData from './mockData.json';
import RestaurantDetail from './components/restaurant/RestaurantDetail';

const App = () => {
  const [modalRestaurantId, setModalRestaurantId] = useState<null | number>(null);
  const [restaurantList, setRestaurantList] = useState(mockData as Restaurant[]);

  const findModalRestaurant = () => {
    return restaurantList.find((restaurant) => restaurant.id === modalRestaurantId);
  };

  const closeModal = () => {
    setModalRestaurantId(null);
  };

  const modalRestaurant = findModalRestaurant();

  useEffect(() => {
    const savedRestaurants = getLocalStorage(LOCAL_STORAGE_KEY.RESTAURANT);

    if (savedRestaurants) {
      setRestaurantList(savedRestaurants);
    } else setLocalStorage(LOCAL_STORAGE_KEY.RESTAURANT, mockData);
  }, []);

  return (
    <>
      <Header />
      <RestaurantList restaurantList={restaurantList} setModalRestaurantId={setModalRestaurantId} />
      {modalRestaurant && (
        <Modal onCloseModal={closeModal}>
          <RestaurantDetail restaurant={modalRestaurant} />
        </Modal>
      )}
    </>
  );
};

export default App;
