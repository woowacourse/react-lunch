import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import './styles/App.css';
import { FoodCategory, RestaurantInfo, SortMethod, isFoodCategory, isSortMethod } from './types/restaurantInfo';
import RestaurantList from './components/RestaurantList';
import Modal from './components/Modal';
import RestaurantDetail from './components/RestaurantDetail';
import { deleteTargetRestaurant, filterFoodCategory, sortRestaurants } from './domain/RestaurantSelector';
import { useLocalStorage } from './hooks/useLocalStorage';
import { RESTUARNT_LIST_LOCAL_STORAGE_KEY } from './constants';
import MOCK_DATA from './data/MockData.json';

export default function App() {
  const [originalRestaurantList, setOriginalRestaurantList] = useLocalStorage<RestaurantInfo[]>(
    RESTUARNT_LIST_LOCAL_STORAGE_KEY,
    MOCK_DATA.restaurantList as RestaurantInfo[],
  );
  const [restaurantList, setRestaurantList] = useState<RestaurantInfo[]>([]);
  const [clickedRestaurant, setClickedRestaurant] = useState<RestaurantInfo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory>('전체');
  const [selectedSortingMethod, setSelectedSortingMethod] = useState<SortMethod>('이름순');

  const changeClickedRestaurant = (restaurantInfo: RestaurantInfo) => {
    setClickedRestaurant(restaurantInfo);

    document.body.dataset.hideScroll = 'true';
  };

  const changeSelectedCategory = (value: string) => {
    if (!isFoodCategory(value)) return;

    setSelectedCategory(value);
  };

  const changeSelectedSortingMethod = (value: string) => {
    if (!isSortMethod(value)) return;

    setSelectedSortingMethod(value);
  };

  const resetClickedRestaurant = () => {
    setClickedRestaurant(null);

    document.body.dataset.hideScroll = 'false';
  };

  const deleteRestaurant = () => {
    if (!clickedRestaurant) return;

    const updatedList = deleteTargetRestaurant(originalRestaurantList, clickedRestaurant);

    setOriginalRestaurantList(updatedList);

    resetClickedRestaurant();
  };

  const filterRestaurantList = () => {
    const filteredList = filterFoodCategory(originalRestaurantList, selectedCategory);
    const sortedList = sortRestaurants(filteredList, selectedSortingMethod);

    setRestaurantList(sortedList);
  };

  const selectChangeCallback = (value: string, kind: 'filter' | 'sort') => {
    if (kind === 'filter') {
      changeSelectedCategory(value);
    }

    if (kind === 'sort') {
      changeSelectedSortingMethod(value);
    }
  };

  useEffect(() => {
    filterRestaurantList();
  }, []);

  useEffect(() => {
    filterRestaurantList();
  }, [originalRestaurantList, selectedCategory, selectedSortingMethod]);

  return (
    <div className="app">
      <Header onChange={selectChangeCallback} />
      <RestaurantList onClick={changeClickedRestaurant} restaurantList={restaurantList} />
      {clickedRestaurant && (
        <Modal onClose={resetClickedRestaurant}>
          <RestaurantDetail
            onDeleteClick={deleteRestaurant}
            onCloseClick={resetClickedRestaurant}
            restaurantInfo={clickedRestaurant}
          />
        </Modal>
      )}
    </div>
  );
}
