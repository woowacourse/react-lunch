import React from 'react';
import styled from 'styled-components';
import mockData from '../mockData.json';
import RestaurantItem from './RestaurantItem';
import { RestaurantItemType, RestaurantListStateType, SelectKind } from '../types';
import { CATEGORY_NAME, ORDER_KEY, LOCAL_STORAGE_RESTAURANTS_KEY } from '../constants';
import SelectBox from './common/SelectBox';
import { $ } from '../utils/domSelector';

const data: RestaurantItemType[] = JSON.parse(JSON.stringify(mockData));

class RestaurantList extends React.Component<object, RestaurantListStateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      restaurants: [],
      filteredRestaurants: [],
      category: CATEGORY_NAME.all,
      order: ORDER_KEY.name,
    };
  }

  handleClickEvent() {
    $<HTMLElement>('#header_title').addEventListener('click', () => {
      this.initSelectOption();
    });
  }

  initSelectOption() {
    const categorySelectBox = $<HTMLSelectElement>(`select[name="${SelectKind.category}"]`);
    categorySelectBox.selectedIndex = 0;
    categorySelectBox.dispatchEvent(new Event('change', { bubbles: true }));

    const orderSelectBox = $<HTMLSelectElement>(`select[name="${SelectKind.order}"]`);
    orderSelectBox.selectedIndex = 0;
    orderSelectBox.dispatchEvent(new Event('change', { bubbles: true }));

    this.handleClickEvent();
  }

  componentDidMount() {
    this.setLocalStorage(data);
    this.setState({ restaurants: this.getLocalStorage(), filteredRestaurants: this.getLocalStorage() });
    this.handleClickEvent();
  }

  getLocalStorage(): RestaurantItemType[] {
    const restaurants = localStorage.getItem(LOCAL_STORAGE_RESTAURANTS_KEY);
    return restaurants ? JSON.parse(restaurants) : [];
  }

  setLocalStorage(data: RestaurantItemType[]) {
    localStorage.setItem(LOCAL_STORAGE_RESTAURANTS_KEY, JSON.stringify(data));
  }

  sortRestaurants() {
    const restaurants = this.state.filteredRestaurants;
    restaurants.sort((a: RestaurantItemType, b: RestaurantItemType): number => {
      if (this.state.order === ORDER_KEY.name) return a.name > b.name ? 1 : -1;
      return a.distance > b.distance ? 1 : -1;
    });
    this.setState({ filteredRestaurants: restaurants });
  }

  filterRestaurants() {
    if (this.state.category === CATEGORY_NAME.all) {
      this.setState({ filteredRestaurants: this.state.restaurants });
      return;
    }

    const filteredRestaurants = this.state.restaurants.filter(
      (restaurant) => restaurant.category === this.state.category
    );
    this.setState({ filteredRestaurants: filteredRestaurants });
  }

  componentDidUpdate(prevProps: object, prevStates: RestaurantListStateType) {
    if (prevStates.category !== this.state.category) {
      this.filterRestaurants();
      window.scrollTo(0, 0);
    }
    if (prevStates.order !== this.state.order || prevStates.filteredRestaurants !== this.state.filteredRestaurants) {
      this.sortRestaurants();
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <>
        <SelectBoxContainer>
          <SelectBox
            selectType={SelectKind.category}
            options={Object.values(CATEGORY_NAME)}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              this.setState({ category: event.target.value });
            }}
          />
          <SelectBox
            selectType={SelectKind.order}
            options={Object.values(ORDER_KEY)}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              this.setState({ order: event.target.value });
            }}
          />
        </SelectBoxContainer>
        <RestaurantListWrapper>
          {this.state.filteredRestaurants.map((restaurant: RestaurantItemType, index: number) => {
            return (
              <RestaurantItem
                key={index}
                category={restaurant.category}
                name={restaurant.name}
                distance={restaurant.distance}
                description={restaurant.description}
                link={restaurant.link}
              />
            );
          })}
        </RestaurantListWrapper>
      </>
    );
  }
}

const RestaurantListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin-top: 156px;
`;

const SelectBoxContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 64px;
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;

  background: #ffffff;
`;

export default RestaurantList;
