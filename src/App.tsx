import React, { Component } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";

interface State {
  selectedCategory: string;
  selectedSort: string;
}
class App extends Component {
  state: State = {
    selectedCategory: "all",
    selectedSort: "name",
  };

  setSelectedCategory(category: string) {
    this.setState({ selectedCategory: category });
  }

  setSelectedSort(sort: string) {
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
