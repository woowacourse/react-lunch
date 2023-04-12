import React, { Component } from "react";
import Select from "./Select";
import mockData from "../mockData.json";
import type { Restaurant, Category, SortBy } from "../types/Restaurant";
import RestaurantList from "./RestaurantList";
import { filterByCategory, sortBy } from "../utils/restaurant";

type RestaurantListState = {
  restaurants: Restaurant[];
  category: Category;
  sort: SortBy;
};

export class Main extends Component<any, RestaurantListState> {
  constructor(props: any) {
    super(props);

    const storageData = localStorage.getItem("restaurant");
    if (storageData === null) {
      const { restaurants } = mockData as { restaurants: Restaurant[] };
      localStorage.setItem("restaurants", JSON.stringify(restaurants));
      this.state = { restaurants, category: "전체", sort: "이름순" };
    } else {
      this.state = {
        restaurants: JSON.parse(storageData),
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
      filterByCategory(this.state.restaurants, this.state.category),
      this.state.sort
    );

    return (
      <>
        <Select setCategory={this.setCategory} setSort={this.setSort} />
        <RestaurantList restaurants={filteredAndSorted} />
      </>
    );
  }
}

export default Main;
