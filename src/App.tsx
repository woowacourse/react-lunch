import { Component } from 'react';
import { Header, Modal, RestaurantList, SelectBox } from './components';
import { GlobalStyle } from './global-style';
import { CategoryFilter, Restaurant, SortFilter } from './types';

import styled, { ThemeProvider } from 'styled-components';

import data from './data/mockData.json';
import { db } from './db/restaurants';

import variables from './components/styles/variables';

type Props = {};

type State = {
  categoryOptions: CategoryFilter[];
  filterOptions: SortFilter[];
  restaurantItems: Restaurant[];
  isModalOpen: boolean;
  clickedRestaurant?: Restaurant | null;
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      categoryOptions: ['전체', '한식', '중식', '일식', '아시안', '양식', '기타'],
      filterOptions: ['거리순', '이름순'],
      restaurantItems: data.items as Restaurant[],
      isModalOpen: false,
      clickedRestaurant: null,
    };
  }
  render() {
    return (
      <>
        <ThemeProvider theme={{ variables }}>
          <GlobalStyle />
          <div className="App">
            <Header></Header>
            <FilterContainer>
              <SelectBox options={this.state.categoryOptions}></SelectBox>
              <SelectBox options={this.state.filterOptions}></SelectBox>
            </FilterContainer>
            <RestaurantList
              restaurants={this.state.restaurantItems}
              onRestaurantClick={this.handleRestaurantClick}
            ></RestaurantList>
            {this.state.clickedRestaurant && this.state.isModalOpen && (
              <Modal
                restaurant={this.state.clickedRestaurant}
                onCloseButtonClick={this.handleModalCloseButtonClick}
              ></Modal>
            )}
          </div>
        </ThemeProvider>
      </>
    );
  }

  handleRestaurantClick = (e: React.MouseEvent) => {
    if (!(e.target !== null && e.target instanceof HTMLElement)) return;
    const clickedId = e.target.closest('li')?.dataset.id;
    const clickedRestaurant = db
      .getRestaurants()
      .find((restaurant) => restaurant.id === Number(clickedId));
    this.setState({ clickedRestaurant });
    this.setState({ isModalOpen: true });
  };

  handleModalCloseButtonClick = (e: React.MouseEvent) => {
    this.setState({ clickedRestaurant: null });
    this.setState({ isModalOpen: false });
  };
}

const FilterContainer = styled.section`
  display: flex;

  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`;

export default App;
