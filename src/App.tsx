import React from 'react';

import { GlobalStyle } from './global-style';
import styled, { ThemeProvider } from 'styled-components';
import variables from './components/styles/variables';

import { useRestaurants, useBoolean } from './hooks';
import { Header, Modal, RestaurantList, SelectBox } from './components';

import { CATEGORY, SORTING } from './constants';

export default function App() {
  const {
    values: { restaurants, clickedRestaurant },
    handlers: { handleCategory, handleSorting, handleRestaurantClick },
  } = useRestaurants();

  const [isModalOpen, openModal, closeModal] = useBoolean(false);

  return (
    <>
      <ThemeProvider theme={{ variables }}>
        <GlobalStyle />
        <div className='App'>
          <Header></Header>
          <FilterContainer>
            <SelectBox
              options={Object.values(CATEGORY)}
              onOptionChange={(e) => {
                handleCategory(e);
              }}
            ></SelectBox>
            <SelectBox
              options={Object.values(SORTING)}
              onOptionChange={(e) => {
                handleSorting(e);
              }}
            ></SelectBox>
          </FilterContainer>
          <RestaurantList
            restaurants={restaurants}
            onRestaurantClick={handleRestaurantClick}
            openModal={openModal}
          ></RestaurantList>
          {clickedRestaurant && isModalOpen && (
            <Modal
              restaurant={clickedRestaurant}
              onCloseButtonClick={closeModal}
            ></Modal>
          )}
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
