import React from 'react';
import RestaurantList from './components/RestaurantList';
import mockData from "./data/mockData.json";
import { Restaurant } from './types/Restaurant';
import SelectBox from './components/SelectBox';

interface AppState {
  restaurants: Restaurant[];
  sortBy: string;
}
class App extends React.Component<{}, AppState> {

  constructor(props: Readonly<{}> | {}) {
    super(props);
    this.state = { restaurants: mockData, sortBy: '이름순' };
  }

  updateSortBy(e: any) {
    this.setState({ sortBy: e.target.value });
  }

  render() {
    return (
      <>
        <div>현재 sortBy 값은? : {this.state.sortBy}</div>
        <SelectBox setState={this.updateSortBy.bind(this)} options={['이름순', '거리순']} />
        <RestaurantList restaurants={this.state.restaurants} />
      </>
    );
  }
}

export default App;
