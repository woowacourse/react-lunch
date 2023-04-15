import React from 'react';
import RestaurantList from '../components/RestaurantList';
import mockData from "../data/mockData.json";
import { Restaurant } from '../types/Restaurant';
import SelectBox from '../components/SelectBox';
import Header from '../components/Header';
import styled from 'styled-components';
import Modal from '../components/RestaurantModal';
import { category, sort } from '../data/selects';
import useRestaurant from '../hooks/useRestaurants';

function LunchApp() {

  const {
    restaurants, sortBy, categorizeBy,
    updateSortBy, updateCategorizeBy,
  } = useRestaurant(mockData as Restaurant[]);

  return (
    <>
      <Header />
      <SelectContainer>
        <SelectBox
          setState={(e) => updateCategorizeBy(e)}
          options={category} />
        <SelectBox
          setState={(e) => updateSortBy(e)}
          options={sort}
        />
      </SelectContainer>
      <RestaurantList sortBy={sortBy} categorizeBy={categorizeBy} restaurants={restaurants} />
      <Modal />
    </>
  );
}


export default LunchApp;


const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`
