import React from 'react';
import RestaurantList from './components/RestaurantList';
import mockData from "./data/mockData.json";
import { Category, Restaurant, Sort } from './types/Restaurant';
import SelectBox from './components/SelectBox';
import Header from './components/Header';
import styled from 'styled-components';

interface AppState {
  restaurants: Restaurant[];
  sortBy: Sort;
  categorizeBy: Category;
}
class App extends React.Component<{}, AppState> {

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
          <SelectBox setState={(e) => this.updateCategorizeBy(e)} options={["all", "chinese", "korean", "asian", "western", "japanese", "etc"]} />
          <SelectBox setState={(e) => this.updateSortBy(e)} options={['name', 'distance']} />
        </SelectContainer>
        <RestaurantList sortBy={sortBy} categorizeBy={categorizeBy} restaurants={restaurants} />
      </>
    );
  }
}

export default App;


const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`
