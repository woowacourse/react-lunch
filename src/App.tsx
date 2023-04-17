import { useState } from 'react';
import { Header, Modal } from './components/common';
import { FilterContainer, RestaurantDetailView, RestaurantList } from './components';
import useModal from './hooks/useModal';

import { getFilteredRestaurantsByCategory, getSortedRestaurants, getRestaurantById } from './helpers/RestaurantHelper';

import type { RestaurantSortOption, RestaurantCategoryFilterOption } from './helpers/RestaurantHelper';

import type { Restaurant } from './types';
import mockData from './mockData.json';
import './App.css';

export default function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(mockData as Restaurant[]);
  const [categoryFilterOption, setCategoryFilterOption] = useState<RestaurantCategoryFilterOption>('전체');
  const [sortOption, setSortOption] = useState<RestaurantSortOption>('name');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant>(mockData[0] as Restaurant);
  const { isOpenModal, modalOpen, modalClose } = useModal();

  const filteredRestaurants = getFilteredRestaurantsByCategory(restaurants, categoryFilterOption);
  const sortedRestaurants = getSortedRestaurants(filteredRestaurants, sortOption);

  const handleCategoryFilterOption = (category: RestaurantCategoryFilterOption) => {
    setCategoryFilterOption(category);
  };

  const handleSortOption = (sortOption: RestaurantSortOption) => {
    setSortOption(sortOption);
  };

  const showRestaurantDetailView = (targetRestaurantId: number) => {
    const targetRestaurant = getRestaurantById(restaurants, targetRestaurantId);

    setSelectedRestaurant(targetRestaurant);
    modalOpen();
  };

  return (
    <div className="App">
      <Header>{'점심 뭐 먹지'}</Header>
      <FilterContainer onChangeCategoryFilter={handleCategoryFilterOption} onChangeSortFilter={handleSortOption} />
      <RestaurantList restaurants={sortedRestaurants} onClick={showRestaurantDetailView} />
      {isOpenModal && (
        <Modal onClick={modalClose}>
          <RestaurantDetailView restaurant={selectedRestaurant} />
        </Modal>
      )}
    </div>
  );
}
