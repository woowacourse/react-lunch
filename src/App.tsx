import { Component } from 'react';
import { Header, Modal, RestaurantList, SelectBox } from './components';

import { GlobalStyle } from './global-style';
import styled, { ThemeProvider } from 'styled-components';

import { CATEGORY, SORTING } from './constants/index';
import { CategoryOption, Restaurant, SortOption } from './types';

import data from './data/mockData.json';
import { db } from './db/restaurants';

import variables from './components/styles/variables';
import { isCategoryOption, isSortOption } from './utils';

type Props = {};

type State = {
  categoryOptions: CategoryOption[];
  sortingOptions: SortOption[];
  selectedCategoryOption: CategoryOption;
  selectedSortingOption: SortOption;
  restaurantItems: Restaurant[];
  isModalOpen: boolean;
  clickedRestaurant?: Restaurant | null;
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      categoryOptions: Object.values(CATEGORY),
      sortingOptions: Object.values(SORTING),
      selectedCategoryOption: CATEGORY.ALL,
      selectedSortingOption: SORTING.DISTANCE,
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

  componentDidMount() {
    if (db.isRestaurantItemsExist()) {
      this.setState({ restaurantItems: db.getRestaurants() });
    } else {
      db.setRestaurants(data.items as Restaurant[]);
    }
  }

  filterByCategory(restaurants: Restaurant[], categoryOption: CategoryOption): Restaurant[] {
    if (categoryOption === CATEGORY.ALL) return restaurants;
    return restaurants.filter((restaurant) => restaurant.category === categoryOption);
  }

  filterBySort(restaurants: Restaurant[], sortingOption: SortOption): Restaurant[] {
    if (sortingOption === SORTING.NAME) {
      return restaurants.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    return restaurants.sort((a, b) => a.distance - b.distance);
  }

  handleCategoryBoxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if(isCategoryOption(e.target.value)) {
      const categoryOption = e.target.value;
      const categorizedRestaurants = this.filterByCategory(db.getRestaurants(), categoryOption);
      const sortedRestaurants = this.filterBySort(categorizedRestaurants, this.state.selectedSortingOption);
  
      this.setState({ selectedCategoryOption: categoryOption, restaurantItems: sortedRestaurants });
  }};

  handleSortingBoxChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if(isSortOption(e.target.value)) {
      const sortingOption = e.target.value;
      const filteredRestaurants = this.filterBySort(this.state.restaurantItems, sortingOption);
  
      this.setState({ selectedSortingOption: sortingOption, restaurantItems: filteredRestaurants });
    }
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

  handleModalCloseButtonClick = () => {
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
