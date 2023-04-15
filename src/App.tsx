import { Restaurant } from './types/restaurant';

import React, { useEffect, useState } from 'react';
import { Header, RestaurantList, RestaurantDetail } from './components';

import mockData from './mockData.json';
import { useRestaurantFilter } from './hooks/useFilter';

interface State {
  isModalOpen: boolean;
  detailId?: Restaurant['id'];
}

const App = () => {
  const [state, setState] = useState<State>({
    isModalOpen: false,
  });

  const [restaurants, { setCategory, setSortingType }] = useRestaurantFilter(
    JSON.parse(localStorage.getItem('restaurants') || '[]')
  );

  useEffect(() => {
    if (!localStorage.getItem('restaurants')) {
      localStorage.setItem('restaurants', JSON.stringify(mockData.restaurants));
    }
  }, []);

  const openModal = (id: Restaurant['id']) => {
    setState({
      ...state,
      detailId: id,
      isModalOpen: true,
    });
  };

  const closeModal = () => {
    setState({
      ...state,
      isModalOpen: false,
    });
  };

  return (
    <div className="App">
      <Header />

      <main>
        <RestaurantList
          restaurants={restaurants}
          openModal={openModal}
          setCategory={setCategory}
          setSortingType={setSortingType}
        />
      </main>

      {state.isModalOpen && (
        <RestaurantDetail
          closeModal={closeModal}
          restaurant={
            mockData.restaurants.find(
              (restaurant) => restaurant.id === state.detailId
            ) as Restaurant
          }
        />
      )}
    </div>
  );
};

export default App;
