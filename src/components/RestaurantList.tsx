import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mockData from '../mockData.json';
import RestaurantItem from './RestaurantItem';
import { RestaurantItemType, SelectKind } from '../types';
import { CATEGORY_NAME, ORDER_KEY, LOCAL_STORAGE_RESTAURANTS_KEY } from '../constants';
import SelectBox from './common/SelectBox';
import { getLocalStorage, setLocalStorage } from '../utils';

const RestaurantList = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState<RestaurantItemType[]>([]);
  const [category, setCategory] = useState<string>(CATEGORY_NAME.all);
  const [order, setOrder] = useState<string>(ORDER_KEY.name);

  useEffect(() => {
    setLocalStorage(LOCAL_STORAGE_RESTAURANTS_KEY, JSON.parse(JSON.stringify(mockData)));
    setFilteredRestaurants(getLocalStorage(LOCAL_STORAGE_RESTAURANTS_KEY));
  }, []);

  useEffect(() => {
    setFilteredRestaurants(getSortedRestaurants(getFilteredRestaurants()));
    window.scrollTo(0, 0);
  }, [category, order]);

  const getSortedRestaurants = (restaurants: RestaurantItemType[]) => {
    const sortedRestaurants = restaurants.sort((a: RestaurantItemType, b: RestaurantItemType): number => {
      if (order === ORDER_KEY.name) return a.name > b.name ? 1 : -1;
      return a.distance > b.distance ? 1 : -1;
    });

    return sortedRestaurants;
  };

  const getFilteredRestaurants = () => {
    const restaurants = getLocalStorage(LOCAL_STORAGE_RESTAURANTS_KEY);

    return category === CATEGORY_NAME.all
      ? restaurants
      : restaurants.filter((restaurant: RestaurantItemType) => restaurant.category === category);
  };

  return (
    <>
      <SelectBoxWrapper>
        <SelectBox
          selectType={SelectKind.category}
          options={Object.values(CATEGORY_NAME)}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setCategory(event.target.value)}
        />
        <SelectBox
          selectType={SelectKind.order}
          options={Object.values(ORDER_KEY)}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setOrder(event.target.value)}
        />
      </SelectBoxWrapper>
      <RestaurantListWrapper>
        {filteredRestaurants.map((restaurant: RestaurantItemType, index: number) => {
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
};

const RestaurantListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin-top: 156px;
`;

const SelectBoxWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 64px;
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;

  background: #ffffff;
  box-shadow: 1px 1px #e9eaed;
`;

export default RestaurantList;

