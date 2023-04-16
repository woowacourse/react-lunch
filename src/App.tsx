import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import Modal from './components/Modal';
import RestaurantDetail from './components/RestaurantDetail';
import { deleteTargetRestaurant, filterFoodCategory, sortRestaurants } from './domain/restaurantSelector';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useSafeUnionTypeState } from './hooks/useSafeUnionTypeState';
import { useModalState } from './hooks/useModalState';
import './styles/App.css';
import { FOOD_CATEGORY, RESTUARNT_LIST_LOCAL_STORAGE_KEY, SORT_METHOD } from './constants';
import MOCK_DATA from './data/MockData.json';
import { FoodCategory, RestaurantInfo, SortMethod } from './types/restaurantInfo';

export default function App() {
  const [originalRestaurantList, setOriginalRestaurantList] = useLocalStorage<RestaurantInfo[]>(
    RESTUARNT_LIST_LOCAL_STORAGE_KEY,
    MOCK_DATA.restaurantList as RestaurantInfo[],
  );
  const [restaurantList, setRestaurantList] = useState<RestaurantInfo[]>([]);
  const [clickedRestaurant, setClickedRestaurant] = useModalState<RestaurantInfo | null>(null);
  const [selectedCategory, setSelectedCategory] = useSafeUnionTypeState<FoodCategory>('전체', FOOD_CATEGORY);
  const [selectedSortingMethod, setSelectedSortingMethod] = useSafeUnionTypeState<SortMethod>('이름순', SORT_METHOD);

  const onClickRestaurantSummary = (restaurantInfo: RestaurantInfo) => {
    setClickedRestaurant(restaurantInfo);
  };

  const resetClickedRestaurant = () => {
    setClickedRestaurant(null);
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

  const onChangeSelect = (value: string, kind: 'filter' | 'sort') => {
    if (kind === 'filter') {
      setSelectedCategory(value);
    }

    if (kind === 'sort') {
      setSelectedSortingMethod(value);
    }
  };

  useEffect(() => {
    filterRestaurantList();
  }, [originalRestaurantList, selectedCategory, selectedSortingMethod]);

  return (
    <div className="app">
      <Header onChange={onChangeSelect} />
      <RestaurantList onClick={onClickRestaurantSummary} restaurantList={restaurantList} />
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
