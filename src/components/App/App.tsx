import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './App.css';
import { RestaurantInfo, isFoodCategory,   isSortMethod } from '../../types/restaurantInfo';
import { hasSavedRestaurantList, saveRestaurantList } from './initializeRestaurantList';
import RestaurantList from '../RestaurantList/RestaurantList';
import Modal from '../Modal/Modal';
import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';
import useRestaurants from './useRestaurants';

function App() {
  if (!hasSavedRestaurantList()) saveRestaurantList();
  
  const [restaurants, setRestaurants, deleteRestaurant] = useRestaurants();
  const [clickedRestaurant, setClickedRestaurant] = useState(null as (RestaurantInfo | null));
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedSortingMethod, setSelectedSortingMethod] = useState('이름순');
  
  const selectChangeCallback = (event: React.ChangeEvent<HTMLSelectElement>, kind: 'sort' | 'filter') => {
    const { value } = event.currentTarget;

    if (kind === 'filter') {
      setSelectedCategory(value);
    }

    if (kind === 'sort') {
      setSelectedSortingMethod(value);
    }
  }

  return (
    <div className="app">
      <Header onChange={selectChangeCallback} />
      <RestaurantList
        restaurants={restaurants}
        onClick={setClickedRestaurant}
        category={isFoodCategory(selectedCategory) ? selectedCategory : '전체'}
        sortingMethod={isSortMethod(selectedSortingMethod) ? selectedSortingMethod : '이름순'}
      />
      {clickedRestaurant && (
        <Modal onClose={() => setClickedRestaurant(null)}>
          <RestaurantDetail
            onDeleteClick={() => {
              deleteRestaurant(clickedRestaurant);
              setClickedRestaurant(null);
            }}
            onCloseClick={() => setClickedRestaurant(null)}
            restaurantInfo={clickedRestaurant}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;
