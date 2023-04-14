import { Restaurant } from './types/restaurant';

import React, { useState } from 'react';
import { Header, RestaurantList, RestaurantDetail } from './components';

import mockData from './mockData.json';

const App = () => {
  if (!localStorage.getItem('restaurants')) {
    localStorage.setItem('restaurants', JSON.stringify(mockData.restaurants));
  }

  const restaurants = JSON.parse(localStorage.getItem('restaurants') || '[]') as Restaurant[];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [detailId, setDetailId] = useState<Restaurant['id']>('');

  const openModal = (id: Restaurant['id']) => {
    setDetailId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <RestaurantList restaurants={restaurants} openModal={openModal} />
      {isModalOpen && (
        <RestaurantDetail
          restaurant={restaurants.find((restaurant) => restaurant.id === detailId) as Restaurant}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
