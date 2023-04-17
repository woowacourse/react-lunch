import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mockData from '../mockData.json';
import RestaurantItem from './RestaurantItem';
import { CategoryKind, OrderKind, RestaurantItemType, SelectKind } from '../types';
import { LOCAL_STORAGE_RESTAURANTS_KEY } from '../constants';
import SelectBox from './common/SelectBox';
import { $ } from '../utils/domSelector';
import { useLocalStorage } from '../utils/localStorageHooks';

const data: RestaurantItemType[] = JSON.parse(JSON.stringify(mockData));

const RestaurantList = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState<RestaurantItemType[]>([]);
  const [category, setCategory] = useState<string>(CategoryKind.all);
  const [order, setOrder] = useState<string>(OrderKind.name);

  const [localRestaurants, setLocalRestaurants] = useLocalStorage<RestaurantItemType[]>(
    LOCAL_STORAGE_RESTAURANTS_KEY,
    []
  );

  const handleClickEvent = () => {
    $<HTMLElement>('#header_title').addEventListener('click', () => {
      initSelectOption();
    });
  };

  const initSelectOption = () => {
    setCategory(CategoryKind.all);
    setOrder(OrderKind.name);

    handleClickEvent();
  };

  const filterRestaurants = () => {
    if (category === CategoryKind.all) {
      setFilteredRestaurants(localRestaurants);
      return;
    }

    const filteredRestaurantsData = localRestaurants.filter((restaurant) => restaurant.category === category);
    setFilteredRestaurants(filteredRestaurantsData);
  };

  useEffect(() => {
    setLocalRestaurants(data);
  }, []);

  useEffect(() => {
    setFilteredRestaurants(localRestaurants);
    handleClickEvent();
  }, [localRestaurants]);

  useEffect(() => {
    filterRestaurants();
    window.scrollTo(0, 0);
  }, [category]);

  const filteredRestaurantElement = () => {
    return (
      <>
        {filteredRestaurants
          .sort((a, b) => {
            if (order === OrderKind.name) return a.name > b.name ? 1 : -1;
            return a.distance > b.distance ? 1 : -1;
          })
          .map((restaurant: RestaurantItemType, index: number) => {
            return <RestaurantItem key={index} {...restaurant} />;
          })}
      </>
    );
  };

  return (
    <>
      <SelectBoxContainer>
        <SelectBox
          name={SelectKind.category}
          optionList={Object.values(CategoryKind)}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setCategory(event.target.value);
          }}
          value={category}
        />
        <SelectBox
          name={SelectKind.order}
          optionList={Object.values(OrderKind)}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setOrder(event.target.value);
          }}
          value={order}
        />
      </SelectBoxContainer>
      <RestaurantListWrapper>{filteredRestaurantElement()}</RestaurantListWrapper>
    </>
  );
};

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
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
`;

export default RestaurantList;
