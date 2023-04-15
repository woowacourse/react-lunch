import React, { useEffect, useState } from 'react';

import { Restaurant } from './@types/type';
import Header from './components/common/Header';
import Modal from './components/common/Modal';
import RestaurantList from './components/restaurant/RestaurantList';
import { LOCAL_STORAGE_KEY } from './constants';
import mockData from './mockData.json';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

function App() {
  const [modalRestaurantId, setModalRestaurantId] = useState<number | null>(null);
  const [restaurantList, setRestaurantList] = useState(mockData as Restaurant[]);

  const openModal = (modalRestaurantID: number) => {
    setModalRestaurantId(modalRestaurantID);
  };

  const closeModal = () => setModalRestaurantId(null);

  const findModalRestaurant = () => {
    return restaurantList.find((restaurant) => restaurant.id === modalRestaurantId) as Restaurant;
  };

  useEffect(() => {
    const savedRestaurants = getLocalStorage(LOCAL_STORAGE_KEY.RESTAURANT);

    if (savedRestaurants) {
      setRestaurantList(savedRestaurants);
    } else setLocalStorage(LOCAL_STORAGE_KEY.RESTAURANT, restaurantList);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <RestaurantList restaurantList={restaurantList} openModal={openModal} />
      {modalRestaurantId && <Modal restaurant={findModalRestaurant()} closeModal={closeModal} />}
    </React.Fragment>
  );
}

export default App;
