import React, { useState } from 'react';
import RestaurantList from '../components/RestaurantList';
import mockData from "../data/mockData.json";
import { Category, Restaurant, Sort } from '../types/Restaurant';
import SelectBox from '../components/SelectBox';
import Header from '../components/Header';
import styled from 'styled-components';
import Modal from '../components/RestaurantModal';
import { category, sort } from '../data/selects';

function LunchApp() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(mockData);
  const [sortBy, setSortBy] = useState<Sort>('name');
  const [categorizeBy, setCategorizeBy] = useState<Category>('all');

  const updateSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as Sort);
  }

  const updateCategorizeBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategorizeBy(e.target.value as Category);
  }

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
