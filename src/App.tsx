import React, { useEffect, useState } from 'react';

import { Restaurant } from './@types/type';
import Header from './components/common/Header';
import RestaurantList from './components/restaurant/RestaurantList';
import RestaurantModal from './components/restaurant/RestaurantModal';
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
    <>
      <Header />
      <RestaurantList restaurantList={restaurantList} openModal={openModal} />
      {modalRestaurantId && <RestaurantModal restaurant={findModalRestaurant()} closeModal={closeModal} />}
    </>
  );
}

export default App;
