import React from "react";
import Select from "./Select";
import type { Restaurant, Category, SortBy } from "../types/Restaurant";
import RestaurantList from "./RestaurantList";
import { filterByCategory, getRestaurants, sortBy } from "../utils/restaurant";

type RestaurantListState = {
  restaurants: Restaurant[];
  category: Category;
  sort: SortBy;
};

type RestaurantListProps = {};

class Main extends React.Component<RestaurantListProps, RestaurantListState> {
  constructor(props: RestaurantListProps) {
    super(props);

    const storageData = getRestaurants();

    this.state = {
      restaurants: storageData,
      category: "전체",
      sort: "이름순",
    };

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

  render() {
    const filteredData = filterByCategory(
      this.state.restaurants,
      this.state.category
    );
    const sortedData = sortBy(filteredData, this.state.sort);

    return (
      <>
        <Select setCategory={this.setCategory} setSort={this.setSort} />
        <RestaurantList restaurants={sortedData} />
      </>
    );
  }
}

export default Main;
