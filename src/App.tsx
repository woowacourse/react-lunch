import React, { useEffect, useState } from 'react';
import Header from './components/common/Header';
import RestaurantList from './components/restaurant/RestaurantList';
import Modal from './components/restaurant/Modal';
import { Restaurant } from './@types/type';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { LOCAL_STORAGE_KEY } from './constants';
import mockData from './mockData.json';

const App = () => {
  const [modalRestaurantId, setModalRestaurantId] = useState<null | number>(null);
  const [restaurantList, setRestaurantList] = useState(mockData as Restaurant[]);

  const findModalRestaurant = () => {
    return restaurantList.find((restaurant) => restaurant.id === modalRestaurantId)!;
  };

  useEffect(() => {
    const savedRestaurants = getLocalStorage(LOCAL_STORAGE_KEY.RESTAURANT);

    if (savedRestaurants) {
      setRestaurantList(savedRestaurants);
    } else setLocalStorage(LOCAL_STORAGE_KEY.RESTAURANT, restaurantList);
  }, [restaurantList]);

  return (
    <React.Fragment>
      <Header />
      <RestaurantList restaurantList={restaurantList} setModalRestaurantId={setModalRestaurantId} />
      {modalRestaurantId && <Modal restaurant={findModalRestaurant()} setModalRestaurantId={setModalRestaurantId} />}
    </React.Fragment>
  );
};

export default App;
