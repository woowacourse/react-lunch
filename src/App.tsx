import React from 'react';
import RestaurantList from './components/RestaurantList';
import mockData from "./data/mockData.json";
import { Category, Restaurant, Sort } from './types/Restaurant';
import SelectBox from './components/SelectBox';

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
        <div>현재 categorizeBy 값은? : {categorizeBy}</div>
        <div>현재 sortBy 값은? : {sortBy}</div>
        <SelectBox setState={this.updateCategorizeBy.bind(this)} options={["all", "chinese", "korean", "asian", "western", "japanese", "etc"]} />
        <SelectBox setState={this.updateSortBy.bind(this)} options={['name', 'distance']} />
        <RestaurantList sortBy={sortBy} categorizeBy={categorizeBy} restaurants={restaurants} />
      </>
    );
  }
}

export default App;
