import { Component } from "react";
import Restaurants from "./components/restaurants";
import SelectBoxes from "./components/selectBoxes";

class App extends Component {
  render() {
    return (
      <>
        <SelectBoxes></SelectBoxes>
        <Restaurants></Restaurants>
      </>
    );
  }
}

export default App;
