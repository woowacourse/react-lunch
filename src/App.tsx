import { Restaurant } from './types/restaurant';

import React, { useState } from 'react';
import { Header, RestaurantList, RestaurantDetail, Filter } from './components';

import { useRestaurantFilter } from './hooks/useFilter';
import { useLocalStorage } from './hooks/useLocalStorage';

interface ModalState {
  isModalOpen: boolean;
  detailId?: Restaurant['id'];
}

const App = () => {
  const localRestaurantsData = useLocalStorage('restaurants');
  const [modalState, setModalState] = useState<ModalState>({
    isModalOpen: false,
  });
  const [restaurants, { setCategory, setSortingType }] = useRestaurantFilter(localRestaurantsData);

  const openModal = (id: Restaurant['id']) => {
    setModalState({
      ...modalState,
      detailId: id,
      isModalOpen: true,
    });
  };

  const closeModal = () => {
    setModalState({
      ...modalState,
      isModalOpen: false,
    });
  };

  return (
    <div className="App">
      <Header />

      <main>
        <Filter setCategory={setCategory} setSortingType={setSortingType} />
        <RestaurantList restaurants={restaurants} openModal={openModal} />
      </main>

      {modalState.isModalOpen && (
        <RestaurantDetail
          closeModal={closeModal}
          restaurant={
            restaurants.find((restaurant) => restaurant.id === modalState.detailId) as Restaurant
          }
        />
      )}
    </div>
  );
};

export default App;
