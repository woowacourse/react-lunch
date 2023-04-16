import { Component, useEffect } from 'react';
import { Header, Modal, RestaurantList, SelectBox } from './components';

import { GlobalStyle } from './global-style';
import styled, { ThemeProvider } from 'styled-components';

import { CATEGORY, SORTING } from './constants/index';
import { CategoryOption, Restaurant, SortOption } from './types';

import data from './data/mockData.json';
import { db } from './db/restaurants';

import variables from './components/styles/variables';
import { isCategoryOption, isSortOption } from './utils';
import useRestaurants from './hooks/useRestaurants';

export default function App() {
  const {
    values: { restaurants },
    handlers: { handleRestaurantClick },
  } = useRestaurants();

  return (
    <>
      <ThemeProvider theme={{ variables }}>
        <GlobalStyle />
        <div className='App'>
          <Header></Header>
          <RestaurantList
            restaurants={restaurants}
            onRestaurantClick={handleRestaurantClick}
          ></RestaurantList>
        </div>
      </ThemeProvider>
    </>
  );
}

const FilterContainer = styled.section`
  display: flex;

  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`;
