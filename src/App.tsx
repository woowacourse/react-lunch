import { Component } from "react";

import Header from "./components/Header";
import RestaurantFilterContainer from "./components/RestaurantFilterContainer";
import RestaurantList from "./components/RestaurantList";

interface State {
  category: string;
  sorting: string;
}
class App extends Component<any, State> {
  state = { category: "전체", sorting: "이름순" };

  setOption(key: string, option: string): void {
    this.setState((prev) => ({ ...prev, [key]: option }));
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <RestaurantFilterContainer setOption={this.setOption.bind(this)} />
          <RestaurantList options={this.state} />
        </main>
      </>
    );
  }
}

export default App;
