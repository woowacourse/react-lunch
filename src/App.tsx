import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { getRestaurantList } from './utils/storage';
import { filterAndSortRestaurantList } from './utils/util';
import { RestaurantList } from './components/restaurant/RestaurantList';
import { Modal } from './components/modal/Modal';
import { RestaurantDetail } from './components/modal/RestaurantDetail';
import { SelectBox } from './components/SelectBox';
import { categoryOption, sortOption } from './constants';
import { Restaurant, SortOption, CategoryOption } from './type';
import { Layout } from './layout';
import { useModal } from './hooks/useModal';

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;

    padding: 0 16px;
    margin-top: 24px;
  `,
};

export interface FilterState {
  category: CategoryOption;
  sort: SortOption;
}

const isSortFilterType = (arg: any): arg is SortOption => {
  return arg === 'distance' || arg === 'name';
};

const isCategoryFilterTye = (arg: any): arg is CategoryOption => {
  return (
    arg === '전체' ||
    arg === '한식' ||
    arg === '중식' ||
    arg === '일식' ||
    arg === '양식' ||
    arg === '아시안' ||
    arg === '기타'
  );
};

export function App() {
  const restaurantList: Restaurant[] = getRestaurantList();
  const [selectedItem, setSelectedItem] = useState<Restaurant | null>(null);
  const [filter, setFilter] = useState<FilterState>({
    category: '전체',
    sort: 'name',
  });

  const { isModalOpen, openModal, closeModal } = useModal();

  const handleClickRestaurantItem = (restaurant: Restaurant) => {
    const selectedId = restaurant.id;
    const selectedRestaurant = restaurantList.find(
      ({ id }) => id === selectedId
    );

    if (selectedRestaurant === undefined) return;

    setSelectedItem(selectedRestaurant);
    openModal();
  };

  const handleSortFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    if (isSortFilterType(selectedOption)) {
      setFilter({ ...filter, sort: selectedOption });
    }
  };

  const handleCategoryFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    if (isCategoryFilterTye(selectedOption)) {
      setFilter({ ...filter, category: selectedOption });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Style.Wrapper>
          <SelectBox
            option={categoryOption}
            handleOptionChange={handleCategoryFilter}
          />
          <SelectBox
            option={sortOption}
            handleOptionChange={handleSortFilter}
          />
        </Style.Wrapper>
        <RestaurantList
          list={filterAndSortRestaurantList(restaurantList, filter)}
          handleClickRestaurantItem={handleClickRestaurantItem}
        />
        <Modal
          isOpen={isModalOpen}
          children={
            selectedItem && <RestaurantDetail restaurant={selectedItem} />
          }
          closeModal={closeModal}
        />
      </Layout>
    </ThemeProvider>
  );
}
