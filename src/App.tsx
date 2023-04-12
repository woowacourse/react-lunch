import React from "react";
import "./App.css";
import Header from "./components/Header";
import RestaurantItem from "./components/RestaurantItem";
import Select from "./components/Select";
import mockData from "./mockData.json";
import type { Restaurant, Category, SortBy } from "./types/Restaurant";

type AppState = { restaurant: Restaurant[]; category: Category; sort: SortBy };

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    const { restaurant } = mockData as { restaurant: Restaurant[] };
    this.state = { restaurant, category: "전체", sort: "이름순" };

    this.setCategory = this.setCategory.bind(this);
    this.setSort = this.setSort.bind(this);
  }

  setCategory(newCategory: Category) {
    this.setState({
      category: newCategory,
    });
  }

  setSort(newSort: SortBy) {
    this.setState({
      sort: newSort,
    });
  }

  filterByCategory(category: Category) {
    const restaurant = this.state.restaurant;

    if (category === "전체") return restaurant;

    return restaurant.filter((r) => r.category === this.state.category);
  }

  sortBy(restaurant: Restaurant[], sort: SortBy) {
    if (sort === "이름순") {
      return restaurant.sort((a, b) => a.storeName.localeCompare(b.storeName));
    }

    return restaurant.sort((a, b) => a.distance - b.distance);
  }

  render() {
    const filteredAndSorted = this.sortBy(
      this.filterByCategory(this.state.category),
      this.state.sort
    );

    return (
      <>
        <Header />
        <Select setCategory={this.setCategory} setSort={this.setSort} />
        <ul>
          {filteredAndSorted.map((restaurantData) => {
            return (
              <RestaurantItem
                key={restaurantData.storeName}
                restaurant={restaurantData}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
