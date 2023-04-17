import { useState } from 'react';
import useModal from './hooks/useModal';
import { Header, Modal } from './components/common';
import { FilterContainer, RestaurantDetailView, RestaurantList } from './components';
import { Restaurant } from './types';
import mockData from './mockData.json';
import {
  getFilteredRestaurantsByCategory,
  getSortedRestaurants,
  getRestaurantById,
} from './RestaurantUtils';
import type { RestaurantSortOption, RestaurantCategoryFilterOption } from './RestaurantUtils';
import './App.css';

const App = () => {
  const [restaurants] = useState<Restaurant[]>(mockData as Restaurant[]);
  const [categoryFilterOption, setCategoryFilterOption] =
    useState<RestaurantCategoryFilterOption>('전체');
  const [sortOption, setSortOption] = useState<RestaurantSortOption>('name');
  const [restaurantForDetailView, setRestaurantForDetailView] = useState<Restaurant>(
    mockData[0] as Restaurant
  );
  const { isOpen, openModal, closeModal } = useModal();

  const filteredRestaurants = getFilteredRestaurantsByCategory(restaurants, categoryFilterOption);
  const sortedRestaurants = getSortedRestaurants(filteredRestaurants, sortOption);

  const onChangeCategoryFilter = (category: RestaurantCategoryFilterOption) => {
    setCategoryFilterOption(category);
  };

  const onChangeSortFilter = (sortOption: RestaurantSortOption) => {
    setSortOption(sortOption);
  };

  const onClickRestaurantItem = (restaurantId: number) => {
    const targetRestaurant = getRestaurantById(restaurants, restaurantId);

    setRestaurantForDetailView(targetRestaurant);
    openModal();
  };

  return (
    <div className="App">
      <Header>점심 뭐 먹지</Header>
      <FilterContainer
        onChangeCategoryFilter={onChangeCategoryFilter}
        onChangeSortFilter={onChangeSortFilter}
      />
      <RestaurantList restaurants={sortedRestaurants} onClick={onClickRestaurantItem} />
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <RestaurantDetailView restaurant={restaurantForDetailView} />
      </Modal>
    </div>
  );
};

export default App;
