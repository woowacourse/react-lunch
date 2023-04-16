import { useState } from 'react';
import * as styled from './App.styles';
import Header from './components/Header/Header';
import RestaurantDetailBottomSheet from './components/RestaurantDetailBottomSheet/RestaurantDetailBottomSheet';
import RestaurantList from './components/RestaurantList/RestaurantList';
import type { DropdownOption } from './components/common/DropdownFilter/Dropdown';
import Dropdown from './components/common/DropdownFilter/Dropdown';
import CATEGORIES from './constants/categories';
import mockRestaurantsData from './data/mockData.json';
import GlobalStyle from './styles/GlobalStyle';
import ResetStyle from './styles/ResetStyle';
import type Filter from './types/Filter';
import type Restaurant from './types/Restaurant';

const DROPDOWN_SORT_FILTERS = [
  {
    label: '이름순',
    value: (restaurants: Restaurant[]) => restaurants.sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    label: '거리순',
    value: (restaurants: Restaurant[]) =>
      restaurants.sort((a, b) => a.distanceByMinutes - b.distanceByMinutes),
  },
];

const DROPDOWN_CATEGORY_FILTERS = [
  { label: '전체', value: (restaurants: Restaurant[]) => restaurants },
  ...CATEGORIES.map((category) => ({
    label: category,
    value: (restaurants: Restaurant[]) =>
      restaurants.filter((restaurant) => restaurant.category === category),
  })),
];

const App = () => {
  const [restaurants, setRestaurants] = useState(mockRestaurantsData as Restaurant[]);
  const [sortOption, setSortOption] = useState<DropdownOption<Filter<Restaurant>>>(DROPDOWN_SORT_FILTERS[0]);
  const [categoryOption, setCategoryOption] = useState<DropdownOption<Filter<Restaurant>>>(DROPDOWN_CATEGORY_FILTERS[0]);
  const [openedRestaurant, setOpenedRestaurant] = useState<Restaurant | null>(null);

  const getFilteredRestaurants = () => {
    const filters = [sortOption, categoryOption].map(({ value: filter }) => filter).filter(
      (filter): filter is Filter<Restaurant> => filter !== null,
    );
    const filteredRestaurants = filters.reduce(
      (_restaurants, filter) => filter(_restaurants),
      restaurants.slice(),
    );
    return filteredRestaurants;
  }

  const openBottomSheet = (restaurant: Restaurant) => {
    setOpenedRestaurant(restaurant);
  };

  const closeBottomSheet = () => {
    setOpenedRestaurant(null);
  };

    return (
      <>
        <ResetStyle />
        <GlobalStyle />

        <Header />

        <styled.RestaurantFilterContainer>
          <Dropdown
            options={DROPDOWN_CATEGORY_FILTERS}
            selectedOption={categoryOption}
            onChange={(option) => setCategoryOption(option)}
          />

          <Dropdown
            options={DROPDOWN_SORT_FILTERS}
            selectedOption={sortOption}
            onChange={(option) => setSortOption(option)}
          />
        </styled.RestaurantFilterContainer>

        <RestaurantList
          restaurants={getFilteredRestaurants()}
          onClickItem={openBottomSheet}
        />
        {openedRestaurant !== null && (
          <RestaurantDetailBottomSheet
            restaurant={openedRestaurant}
            isOpened
            onClose={closeBottomSheet}
          />
        )}
      </>
    );
}

export default App;
