import { useEffect, useState } from 'react';

import './css/App.css';

import Header from './components/Header';
import MainLayout from './components/MainLayout';
import RestaurantDetailModal from './components/RestaurantDetailModal';

import { Restaurant } from './domain/type';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

let didInit = false;

const App = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [restaurantId, setRestaurantId] = useState('');
  const [isModalOpened, setIsModalOpened] = useState(false);
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId,
  );
  const canOpenModal = restaurant && isModalOpened;

  const handleModalClose = () => {
    setIsModalOpened(false);
  };

  useEffect(() => {
    if (!didInit) {
      didInit = true;

      const localStorageData =
        (getLocalStorage('restaurants') as Restaurant[]) ?? [];

      if (localStorageData.length > 0) {
        setRestaurants(localStorageData);
        return;
      }

      const fetchRestaurants = async () => {
        const response = await fetch('./react-lunch/mockData.json');
        const data = await response.json();

        if (data === null) return;

        setRestaurants(data);
        setLocalStorage('restaurants', data);
      };

      fetchRestaurants();
    }
  }, []);

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
