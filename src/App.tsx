import React, { Component } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import { CategoryOption, SortOption } from "./types/restaurant";

interface State {
  selectedCategory: CategoryOption;
  selectedSort: SortOption;
}
class App extends Component {
  state: State = {
    selectedCategory: "all",
    selectedSort: "name",
  };

  setSelectedCategory(category: CategoryOption) {
    this.setState({ selectedCategory: category });
  }

  setSelectedSort(sort: SortOption) {
    this.setState({ selectedSort: sort });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Filter
          setSelectedCategory={this.setSelectedCategory.bind(this)}
          setSelectedSort={this.setSelectedSort.bind(this)}
        />
        <RestaurantList />
      </div>
    );
  }
}

export default App;
