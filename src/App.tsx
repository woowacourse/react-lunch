import React, { Component } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import { CategoryOption, SortOption } from "./types/restaurant";

interface AppState {
  selectedCategory: CategoryOption;
  selectedSort: SortOption;
}
class App extends Component {
  state: AppState = {
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
    const filterProps = {
      setSelectedCategory: this.setSelectedCategory.bind(this),
      setSelectedSort: this.setSelectedSort.bind(this),
    };

    const restaurantListProps = {
      selectedCategory: this.state.selectedCategory,
      selectedSort: this.state.selectedSort,
    };

    return (
      <div className="App">
        <Header />
        <Filter {...filterProps} />
        <RestaurantList {...restaurantListProps} />
      </div>
    );
  }
}

export default App;
