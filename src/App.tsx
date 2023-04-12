import { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { getRestaurantList } from './utils/storage';
import { filterAndSortArray } from './utils/util';
import { Header } from './components/Header';
import { RestaurantList } from './components/RestaurantList';
import { Modal } from './components/modal/Modal';
import { RestaurantDetail } from './components/modal/RestaurantDetail';
import { SelectBox } from './components/SelectBox';
import { categoryOption, sortOption } from './constants';
import { Restaurant, CategoryFilter, SortFilter } from './type';

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;

    padding: 0 16px;
    margin-top: 24px;
  `,
};

interface AppState {
  isOpen: boolean;
  selectedItem: Restaurant | null;
  filter: FilterState;
}

export interface FilterState {
  category: CategoryFilter;
  sort: SortFilter;
}

const isSortFilterType = (arg: any): arg is SortFilter => {
  return arg === 'distance' || arg === 'name';
};

const isCategoryFilterTye = (arg: any): arg is CategoryFilter => {
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

export class App extends Component<any, AppState> {
  restaurantList: Restaurant[] = getRestaurantList();

  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
      selectedItem: null,
      filter: {
        category: '전체',
        sort: 'name',
      },
    };
  }

  toggleIsOpen() {
    this.setState(() => ({ isOpen: !this.state.isOpen }));
  }

  clickRestaurantItem(e: React.MouseEvent<HTMLElement>) {
    if (!(e.target instanceof HTMLElement)) return;

    const selectedId = e.target.closest('li')?.id;
    const selectedRestaurant = this.restaurantList.find(
      ({ id }) => id === selectedId
    );

    if (selectedRestaurant === undefined) return;

    this.setState(() => ({ selectedItem: selectedRestaurant }));
    this.toggleIsOpen();
  }

  selectFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedOption = e.target.value;

    if (isSortFilterType(selectedOption)) {
      this.setState(() => ({
        filter: { ...this.state.filter, sort: selectedOption },
      }));
    }

    if (isCategoryFilterTye(selectedOption)) {
      this.setState(() => ({
        filter: {
          ...this.state.filter,
          category: selectedOption,
        },
      }));
    }
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Style.Wrapper>
          <SelectBox
            option={categoryOption}
            selectFilter={this.selectFilter.bind(this)}
          />
          <SelectBox
            option={sortOption}
            selectFilter={this.selectFilter.bind(this)}
          />
        </Style.Wrapper>
        <RestaurantList
          list={filterAndSortArray(this.restaurantList, this.state.filter)}
          clickRestaurantItem={this.clickRestaurantItem.bind(this)}
        />
        <Modal
          isOpen={this.state.isOpen}
          children={
            this.state.selectedItem && (
              <RestaurantDetail info={this.state.selectedItem} />
            )
          }
          toggleOpen={this.toggleIsOpen.bind(this)}
        />
      </>
    );
  }
}
