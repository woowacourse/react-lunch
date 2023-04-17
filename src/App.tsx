import { useState } from 'react';
import { Header, Modal } from './components/common';
import { FilterContainer, RestaurantDetailView, RestaurantList } from './components';

import {
  getFilteredRestaurantsByCategory,
  getSortedRestaurants,
  getRestaurantById,
} from './helpers/RestaurantHelper';

import type {
  RestaurantSortOption,
  RestaurantCategoryFilterOption,
} from './helpers/RestaurantHelper';

import type { Restaurant } from './types';
import mockData from './mockData.json';
import './App.css';

export default function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(mockData as Restaurant[]);
  const [categoryFilterOption, setCategoryFilterOption] =
    useState<RestaurantCategoryFilterOption>('전체');
  const [sortOption, setSortOption] = useState<RestaurantSortOption>('name');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant>(
    mockData[0] as Restaurant
  );
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const filteredRestaurants = getFilteredRestaurantsByCategory(restaurants, categoryFilterOption);
  const sortedRestaurants = getSortedRestaurants(filteredRestaurants, sortOption);

  const onChangeCategoryFilter = (category: RestaurantCategoryFilterOption) => {
    setCategoryFilterOption(category);
  };

  const onChangeSortFilter = (sortOption: RestaurantSortOption) => {
    setSortOption(sortOption);
  };

  const onClickRestaurantItem = (targetRestaurantId: number) => {
    const targetRestaurant = getRestaurantById(restaurants, targetRestaurantId);

    setSelectedRestaurant(targetRestaurant);
    setIsOpenModal(true);
  };

  const onClickModalCloseButton = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="App">
      <Header>{'점심 뭐 먹지'}</Header>
      <FilterContainer
        onChangeCategoryFilter={onChangeCategoryFilter}
        onChangeSortFilter={onChangeSortFilter}
      />
      <RestaurantList restaurants={sortedRestaurants} onClick={onClickRestaurantItem} />
      {isOpenModal && (
        <Modal onClick={onClickModalCloseButton}>
          <RestaurantDetailView restaurant={selectedRestaurant} />
        </Modal>
      )}
    </div>
  );
}
