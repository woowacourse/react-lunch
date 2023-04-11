import { Component } from "react";
import mockData from "./assets/mockData.json";
import Header from "./components/Header";
import RestaurantFilterContainer from "./components/RestaurantFilterContainer";
import RestaurantList from "./components/RestaurantList";
import type { Restaurant } from "./types/restaurant";

interface State {
  restaurants: Restaurant[];
}
class App extends Component<any, State> {
  state: State = { restaurants: mockData };

  setRestaurants(restaurants: Restaurant[]) {
    this.setState({ restaurants });
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <RestaurantFilterContainer
            restaurants={this.state.restaurants}
            setRestaurants={this.setRestaurants.bind(this)}
          />
          <RestaurantList list={this.state.restaurants} />
        </main>
      </>
    );
  }
}

export default App;
