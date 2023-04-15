import { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { RestaurantList } from './components/restaurant/RestaurantList';
import { Modal } from './components/modal/Modal';
import { RestaurantDetail } from './components/modal/RestaurantDetail';
import { SelectBox } from './components/SelectBox';
import { categoryOption, sortOption } from './constants';
import { Restaurant, SortOption, CategoryOption } from './type';
import { Layout } from './layout';
import { getRestaurantListObj } from './domain/Restaurant';

const Style = {
  SelectBoxWrapper: styled.div`
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Restaurant | null>();
  const [filter, setFilter] = useState<FilterState>({
    category: '전체',
    sort: 'name',
  });

  const restaurantListObj = getRestaurantListObj();

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const handleClickRestaurantItem = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) return;

    const selectedId = e.target.closest('li')?.id;

    if (selectedId === undefined) {
      alert('선택한 레스토랑의 상세 정보를 불러올 수 없습니다.');
      return;
    }

    const selectedRestaurant =
      restaurantListObj.getRestaurantInfoById(selectedId);

    setSelectedItem(selectedRestaurant);
    openModal();
  };

  const handleSelectCategoryOption = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOption = e.target.value;

    if (isCategoryFilterTye(selectedOption))
      setFilter({
        ...filter,
        category: selectedOption,
      });
  };

  const handleSelectSortOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;

    if (isSortFilterType(selectedOption)) {
      setFilter({
        ...filter,
        sort: selectedOption,
      });
    }
  };

  return (
    <Layout>
      <GlobalStyle />
      <Style.SelectBoxWrapper>
        <SelectBox
          option={categoryOption}
          handleOptionChange={handleSelectCategoryOption}
        />
        <SelectBox
          option={sortOption}
          handleOptionChange={handleSelectSortOption}
        />
      </Style.SelectBoxWrapper>
      <RestaurantList
        list={restaurantListObj.getFilteredRestaurant(filter)}
        clickRestaurantItem={handleClickRestaurantItem}
      />
      {isOpen && (
        <Modal
          children={selectedItem && <RestaurantDetail info={selectedItem} />}
          closeModal={closeModal}
        />
      )}
    </Layout>
  );
}
