import React from 'react';
import RestaurantList from './components/RestaurantList';
import mockData from "./data/mockData.json";
import { Restaurant, Sort } from './types/Restaurant';
import SelectBox from './components/SelectBox';

interface AppState {
  restaurants: Restaurant[];
  sortBy: Sort;
}
class App extends React.Component<{}, AppState> {

  constructor(props: Readonly<{}> | {}) {
    super(props);
    this.state = { restaurants: mockData, sortBy: 'name' };
  }

  updateSortBy(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ sortBy: e.target.value as Sort });
  }

  render() {
    const { sortBy, restaurants } = this.state;

    return (
      <>
        <div>현재 sortBy 값은? : {sortBy}</div>
        <SelectBox setState={this.updateSortBy.bind(this)} options={['name', 'distance']} />
        <RestaurantList sortBy={sortBy} restaurants={restaurants} />
      </>
    );
  }
}

export default App;
