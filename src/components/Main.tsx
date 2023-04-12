import React, { Component } from "react";
import Select from "./Select";
import mockData from "../mockData.json";
import type { Restaurant, Category, SortBy } from "../types/Restaurant";
import RestaurantList from "./RestaurantList";
import { filterByCategory, sortBy } from "../utils/restaurant";

type RestaurantListState = {
  restaurant: Restaurant[];
  category: Category;
  sort: SortBy;
};

export class Main extends Component<any, RestaurantListState> {
  constructor(props: any) {
    super(props);

    const storageData = localStorage.getItem("restaurant");
    if (storageData === null) {
      const { restaurant } = mockData as { restaurant: Restaurant[] };
      localStorage.setItem("restaurant", JSON.stringify(restaurant));
      this.state = { restaurant, category: "전체", sort: "이름순" };
    } else {
      this.state = {
        restaurant: JSON.parse(storageData),
        category: "전체",
        sort: "이름순",
      };
    }

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
    const filteredAndSorted = sortBy(
      filterByCategory(this.state.restaurant, this.state.category),
      this.state.sort
    );

    return (
      <>
        <Select setCategory={this.setCategory} setSort={this.setSort} />
        <RestaurantList restaurant={filteredAndSorted} />
      </>
    );
  }
}

export default Main;
