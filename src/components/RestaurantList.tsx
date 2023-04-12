import React from 'react';
import styled from 'styled-components';
import mockData from '../mockData.json';
import RestaurantItem from './RestaurantItem';
import { RestaurantItemType, RestaurantListStateType, SelectKind } from '../types';
import { CATEGORY_NAME, ORDER_KEY } from '../constants';
import SelectBox from './SelectBox';

const data: RestaurantItemType[] = JSON.parse(JSON.stringify(mockData));

class RestaurantList extends React.Component<object, RestaurantListStateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      restaurants: [],
      category: CATEGORY_NAME.all,
      order: ORDER_KEY.name,
    };
  }

  componentDidMount() {
    this.setLocalStorage(data);
    this.setState({ restaurants: this.getLocalStorage() });
    this.sortRestaurants();
  }

  getLocalStorage(): RestaurantItemType[] {
    const restaurants = localStorage.getItem('restaurants');
    return restaurants ? JSON.parse(restaurants) : [];
  }

  setLocalStorage(data: RestaurantItemType[]) {
    localStorage.setItem('restaurants', JSON.stringify(data));
  }

  sortRestaurants() {
    this.state.restaurants.sort((a: RestaurantItemType, b: RestaurantItemType): number => {
      if (this.state.order === '이름순') return a.name > b.name ? 1 : -1;
      return a.distance > b.distance ? 1 : -1;
    });
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
              this.sortRestaurants();
            }}
          />
          <SelectBox
            selectType={SelectKind.order}
            options={Object.values(ORDER_KEY)}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              this.setState({ order: event.target.value });
              this.sortRestaurants();
            }}
          />
        </SelectBoxContainer>
        <RestaurantListWrapper>
          {this.state.restaurants.map((restaurant: RestaurantItemType, index: number) => {
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
`;

const SelectBoxContainer = styled.div`
  width: '100%';
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
`;

export default RestaurantList;
