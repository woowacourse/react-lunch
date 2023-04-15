import { useState } from 'react';

import './css/App.css';

import Header from './components/Header';
import MainLayout from './components/MainLayout';
import RestaurantDetailModal from './components/RestaurantDetailModal';
import { useRestaurants } from './components/MainLayout/useRestaurants';

const App = () => {
  const { restaurants } = useRestaurants();
  const [restaurantId, setRestaurantId] = useState('');
  const [isModalOpened, setIsModalOpened] = useState(false);
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId,
  );
  const canOpenModal = restaurant && isModalOpened;

  const handleModalClose = () => {
    setIsModalOpened(false);
  };

  return (
    <div className="App">
      <Header />
      <MainLayout
        restaurants={restaurants}
        onClickRestaurant={setRestaurantId}
      />
      {canOpenModal ? (
        <RestaurantDetailModal
          restaurant={restaurant}
          onCloseModal={handleModalClose}
        />
      ) : null}
    </div>
  );
};

export default App;
