import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mockData from '../mockData.json';
import RestaurantItem from './RestaurantItem';
import { CategoryKind, OrderKind, RestaurantItemType, SelectKind } from '../types';
import { LOCAL_STORAGE_RESTAURANTS_KEY } from '../constants';
import SelectBox from './common/SelectBox';
import { $ } from '../utils/domSelector';

const data: RestaurantItemType[] = JSON.parse(JSON.stringify(mockData));

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<RestaurantItemType[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<RestaurantItemType[]>([]);
  const [category, setCategory] = useState<string>(CategoryKind.all);
  const [order, setOrder] = useState<string>(OrderKind.name);

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

  const getLocalStorage = async (): Promise<RestaurantItemType[]> => {
    const restaurants = localStorage.getItem(LOCAL_STORAGE_RESTAURANTS_KEY);
    return restaurants ? await JSON.parse(restaurants) : [];
  };

  const setLocalStorage = (data: RestaurantItemType[]) => {
    localStorage.setItem(LOCAL_STORAGE_RESTAURANTS_KEY, JSON.stringify(data));
  };

  const sortRestaurants = () => {
    filteredRestaurants.sort((a: RestaurantItemType, b: RestaurantItemType): number => {
      if (order === OrderKind.name) return a.name > b.name ? 1 : -1;
      return a.distance > b.distance ? 1 : -1;
    });
    setFilteredRestaurants(restaurants);
  };

  const filterRestaurants = () => {
    if (category === CategoryKind.all) {
      setFilteredRestaurants(restaurants);
      return;
    }

    const filteredRestaurants = restaurants.filter((restaurant) => restaurant.category === category);
    setFilteredRestaurants(filteredRestaurants);
  };

  useEffect(() => {
    const getLocalData = async () => {
      const restaurantsData = await getLocalStorage();
      setRestaurants(restaurantsData);
      setFilteredRestaurants(restaurantsData);
    };

    setLocalStorage(data);
    getLocalData();

    handleClickEvent();
  }, []);

  useEffect(() => {
    filterRestaurants();
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => {
    sortRestaurants();
    window.scrollTo(0, 0);
  }, [order]);

  return (
    <>
      <SelectBoxContainer>
        <SelectBox
          selectType={SelectKind.category}
          options={Object.values(CategoryKind)}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setCategory(event.target.value);
          }}
          value={category}
        />
        <SelectBox
          selectType={SelectKind.order}
          options={Object.values(OrderKind)}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setOrder(event.target.value);
          }}
          value={order}
        />
      </SelectBoxContainer>
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
