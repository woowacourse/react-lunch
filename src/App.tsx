import { Header, Modal, RestaurantList, SelectBox } from './components';

import { GlobalStyle } from './global-style';
import styled, { ThemeProvider } from 'styled-components';

import variables from './components/styles/variables';
import { isCategoryOption, isSortOption } from './utils';
import { useRestaurants, useBoolean } from './hooks';

export default function App() {
  const {
    values: { restaurants, clickedRestaurant },
    handlers: { handleRestaurantClick },
  } = useRestaurants();

  const [isModalOpen, openModal, closeModal] = useBoolean(false);

  return (
    <>
      <ThemeProvider theme={{ variables }}>
        <GlobalStyle />
        <div className='App'>
          <Header></Header>
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
