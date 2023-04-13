import React from 'react';
import RestaurantList from '../components/RestaurantList';
import mockData from "../data/mockData.json";
import { Category, Restaurant, Sort } from '../types/Restaurant';
import SelectBox from '../components/SelectBox';
import Header from '../components/Header';
import styled from 'styled-components';
import Modal from '../components/RestaurantModal';
import { category, sort } from '../data/selects';

interface LunchAppState {
  restaurants: Restaurant[];
  sortBy: Sort;
  categorizeBy: Category;
}
class LunchApp extends React.Component<{}, LunchAppState> {

  constructor(props: Readonly<{}> | {}) {
    super(props);
    this.state = { restaurants: mockData, sortBy: 'name', categorizeBy: 'all' };
  }

  updateSortBy(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ sortBy: e.target.value as Sort });
  }

  updateCategorizeBy(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ categorizeBy: e.target.value as Category });
  }

  render() {
    const { sortBy, categorizeBy, restaurants } = this.state;

    return (
      <>
        <Header />
        <SelectContainer>
          <SelectBox
            setState={(e) => this.updateCategorizeBy(e)}
            options={category} />
          <SelectBox
            setState={(e) => this.updateSortBy(e)}
            options={sort}
          />
        </SelectContainer>
        <RestaurantList sortBy={sortBy} categorizeBy={categorizeBy} restaurants={restaurants} />
        <Modal />
      </>
    );
  }
}

export default LunchApp;


const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`
