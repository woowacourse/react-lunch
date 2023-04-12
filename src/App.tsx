import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { Header } from './components/Header';
import { RestaurantList } from './components/RestaurantList';
import dummyList from './mockData.json';
import { Restaurant, CategoryFilter, SortFilter } from './type';
import { Modal } from './components/modal/Modal';
import { RestaurantDetail } from './components/modal/RestaurantDetail';
import { SelectBox } from './components/SelectBox';
import { categoryOption, sortOption } from './constants';
import { getRestaurantList, setRestaurantList } from './utils/storage';
import { filterAndSortArray } from './utils/util';

interface AppState {
  isOpen: boolean;
  list: Restaurant[];
  selectedItem: Restaurant | null;
  filter: FilterState;
}

export interface FilterState {
  category: CategoryFilter;
  sort: SortFilter;
}

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;

    padding: 0 16px;
    margin-top: 24px;
  `,
};

export class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);

    const initialList = getRestaurantList();

    this.state = {
      isOpen: false,
      list: initialList,
      selectedItem: null,
      filter: {
        category: '전체',
        sort: 'name',
      },
    };
  }

  componentDidMount(): void {
    this.setState({
      list: filterAndSortArray(getRestaurantList(), this.state.filter),
    });
  }

  toggleIsOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  clickRestaurantItem(e: any) {
    const selectedId = e.target.closest('li').id;
    const selectedRestaurant = this.state.list.find(
      ({ id }) => id === selectedId
    );

    if (selectedRestaurant === undefined) return;

    this.setState({ selectedItem: selectedRestaurant });
    this.toggleIsOpen();
  }

  selectFilter(e: any) {
    const selectedOption = e.target.value;

    if (sortOption.some((option) => option.value === selectedOption)) {
      this.setState(
        { filter: { ...this.state.filter, sort: selectedOption } },
        () =>
          this.setState({
            list: filterAndSortArray(getRestaurantList(), this.state.filter),
          })
      );

      return;
    }

    this.setState(
      {
        filter: { ...this.state.filter, category: selectedOption },
      },
      () =>
        this.setState({
          list: filterAndSortArray(getRestaurantList(), this.state.filter),
        })
    );
  }

  render() {
    return (
      <div className="App">
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
          list={this.state.list}
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
      </div>
    );
  }
}
