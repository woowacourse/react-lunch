import { Restaurant } from './types/restaurant';

import React, { useState } from 'react';
import { Header, RestaurantList, Modal, RestaurantDetail } from './components';

import mockData from './mockData.json';

const App = () => {
  if (!localStorage.getItem('restaurants')) {
    localStorage.setItem('restaurants', JSON.stringify(mockData.restaurants));
  }

  const restaurants = JSON.parse(localStorage.getItem('restaurants') || '[]') as Restaurant[];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [restaurantDetail, setRestaurantDetail] = useState<Restaurant | null>(null);

  const openModal = (id: Restaurant['id']) => {
    setRestaurantDetail(restaurants.find((restaurant) => restaurant.id === id) as Restaurant);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <RestaurantList restaurants={restaurants} openModal={openModal} />

      {isModalOpen && restaurantDetail && (
        <Modal closeModal={closeModal}>
          <RestaurantDetail restaurant={restaurantDetail} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default App;
