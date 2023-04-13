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
  sortingOptions: SortFilter[];
  selectedCategoryOption: CategoryFilter;
  selectedSortingOption: SortFilter;
  restaurantItems: Restaurant[];
  isModalOpen: boolean;
  clickedRestaurant?: Restaurant | null;
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      categoryOptions: ['전체', '한식', '중식', '일식', '아시안', '양식', '기타'],
      sortingOptions: ['거리순', '이름순'],
      selectedCategoryOption: '전체',
      selectedSortingOption: '거리순',
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
              <SelectBox
                options={this.state.categoryOptions}
                onOptionChange={this.handleCategoryBoxChange}
              ></SelectBox>
              <SelectBox
                options={this.state.sortingOptions}
                onOptionChange={this.handleSortingBoxChange}
              ></SelectBox>
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

  filterByCategory(restaurants: Restaurant[], categoryOption: CategoryFilter): Restaurant[] {
    if (categoryOption === '전체') return restaurants;
    return restaurants.filter((restaurant) => restaurant.category === categoryOption);
  }

  filterBySort(restaurants: Restaurant[], sortingOption: SortFilter): Restaurant[] {
    if (sortingOption === '이름순') {
      return restaurants.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    return restaurants.sort((a, b) => a.distance - b.distance);
  }

  handleCategoryBoxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryOption = e.target.value as CategoryFilter; // 가드 고려
    const categorizedRestaurants = this.filterByCategory(db.getRestaurants(), categoryOption);
    const sortedRestaurants = this.filterBySort(
      categorizedRestaurants,
      this.state.selectedSortingOption
    );
    this.setState({ selectedCategoryOption: categoryOption, restaurantItems: sortedRestaurants });
  };

  handleSortingBoxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortingOption = e.target.value as SortFilter; // 가드 고려
    const filteredRestaurants = this.filterBySort(this.state.restaurantItems, sortingOption);

    this.setState({ selectedSortingOption: sortingOption, restaurantItems: filteredRestaurants });
  };

  handleRestaurantClick = (e: React.MouseEvent<HTMLElement>) => {
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
