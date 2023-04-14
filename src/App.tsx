import { Restaurant } from './types/restaurant';

import React, { useEffect, useState } from 'react';
import { Header, RestaurantList, RestaurantDetail } from './components';

import mockData from './mockData.json';

const App = () => {
  const restaurants = JSON.parse(localStorage.getItem('restaurants') || '[]') as Restaurant[];
  const [detailId, setDetailId] = useState<Restaurant['id']>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (id: Restaurant['id']) => {
    setDetailId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!localStorage.getItem('restaurants')) {
      localStorage.setItem('restaurants', JSON.stringify(mockData.restaurants));
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <RestaurantList restaurants={restaurants} openModal={openModal} />
      {isModalOpen && (
        <RestaurantDetail
          closeModal={closeModal}
          restaurant={restaurants.find((restaurant) => restaurant.id === detailId) as Restaurant}
        />
      )}
    </div>
  );
};

export default App;
