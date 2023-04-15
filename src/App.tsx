import { Component, useEffect, useState } from 'react';
import { Header, Modal, RestaurantList, SelectBox } from 'components';
import { GlobalStyle } from 'global-style';
import { CategoryFilter, Restaurant, SortFilter } from 'types';

import styled, { ThemeProvider } from 'styled-components';

import data from 'data/mockData.json';
import { db } from 'db/restaurants';

import variables from 'components/styles/variables';

function App() {
  const [categoryOptions, setCategoryOptions] = useState<CategoryFilter[]>([
    '전체',
    '한식',
    '중식',
    '일식',
    '아시안',
    '양식',
    '기타',
  ]);
  const [sortingOptions, setSortingOptions] = useState<SortFilter[]>(['거리순', '이름순']);
  const [selectedCategoryOption, setSelectedCategoryOption] = useState<CategoryFilter>('전체');
  const [selectedSortingOption, setSelectedSortingOption] = useState<SortFilter>('거리순');
  const [restaurantItems, setRestaurantItems] = useState<Restaurant[]>(data.items as Restaurant[]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedRestaurant, setClickedRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    if (db.isRestaurantItemsExist()) {
      setRestaurantItems(db.getRestaurants());
    } else {
      setRestaurantItems(data.items as Restaurant[]);
      db.setRestaurants(data.items as Restaurant[]);
    }
  }, []);

  const filterByCategory = (
    restaurants: Restaurant[],
    categoryOption: CategoryFilter
  ): Restaurant[] => {
    if (categoryOption === '전체') return restaurants;
    return restaurants.filter((restaurant) => restaurant.category === categoryOption);
  };

  const filterBySort = (restaurants: Restaurant[], sortingOption: SortFilter): Restaurant[] => {
    if (sortingOption === '이름순') {
      return restaurants.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    return restaurants.sort((a, b) => a.distance - b.distance);
  };

  const handleCategoryBoxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryOption = e.target.value as CategoryFilter; // 가드 고려
    const categorizedRestaurants = filterByCategory(db.getRestaurants(), categoryOption);
    const sortedRestaurants = filterBySort(categorizedRestaurants, selectedSortingOption);

    setSelectedCategoryOption(categoryOption);
    setRestaurantItems(sortedRestaurants);
  };

  const handleSortingBoxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortingOption = e.target.value as SortFilter; // 가드 고려
    const filteredRestaurants = filterBySort(restaurantItems, sortingOption);

    setSelectedSortingOption(sortingOption);
    setRestaurantItems(filteredRestaurants);
  };

  const handleRestaurantClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target !== null && e.target instanceof HTMLElement)) return;
    const clickedId = e.target.closest('li')?.dataset.id;
    const clickedRestaurant =
      db.getRestaurants().find((restaurant) => restaurant.id === Number(clickedId)) ?? null;

    setClickedRestaurant(clickedRestaurant);
    setIsModalOpen(true);
  };

  const handleModalCloseButtonClick = () => {
    setClickedRestaurant(null);
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider theme={{ variables }}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <FilterContainer>
          <SelectBox options={categoryOptions} onOptionChange={handleCategoryBoxChange}></SelectBox>
          <SelectBox options={sortingOptions} onOptionChange={handleSortingBoxChange}></SelectBox>
        </FilterContainer>
        <RestaurantList restaurants={restaurantItems} onRestaurantClick={handleRestaurantClick} />
        {clickedRestaurant && isModalOpen && (
          <Modal restaurant={clickedRestaurant} onCloseButtonClick={handleModalCloseButtonClick} />
        )}
      </div>
    </ThemeProvider>
  );
}

const FilterContainer = styled.section`
  display: flex;

  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`;

export default App;
