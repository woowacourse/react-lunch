import React from 'react';
import RestaurantList from './components/RestaurantList';
import mockData from "./data/mockData.json";
import { Restaurant } from './types/Restaurant';

interface AppState {
  restaurants: Restaurant[];
}
class App extends React.Component<{}, AppState> {


  constructor(props: Readonly<{}> | {}) {
    super(props);
    this.state = { restaurants: mockData };
  }


  render() {
    return (
      <>
        <RestaurantList restaurants={this.state.restaurants} />
      </>
    );
  }
}

export default App;
