import "./index.css";
import { Component } from "react";
import { CategoryOption, SortOption } from "../../types/restaurant";

const CATEGORY_LIST = {
  all: "전체",
  korean: "한식",
  japanese: "일식",
  western: "양식",
  asian: "아시안",
  etc: "기타",
};

const SORT_LIST = {
  name: "이름순",
  distance: "거리순",
};

interface FilterProps {
  setSelectedCategory: (category: CategoryOption) => void;
  setSelectedSort: (sort: SortOption) => void;
}

export default class Filter extends Component<FilterProps> {
  setSelectedCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    this.props.setSelectedCategory(event.target.value as CategoryOption);
  }

  setSelectedSort(event: React.ChangeEvent<HTMLSelectElement>) {
    this.props.setSelectedSort(event.target.value as SortOption);
  }

  render() {
    return (
      <section className="restaurant-filter-container">
        <select
          name="category"
          id="category-filter"
          className="restaurant-filter"
          onChange={this.setSelectedCategory.bind(this)}
        >
          {Object.entries(CATEGORY_LIST).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
        <select
          name="sorting"
          id="sorting-filter"
          className="restaurant-filter"
          onChange={this.setSelectedSort.bind(this)}
        >
          {Object.entries(SORT_LIST).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </section>
    );
  }
}
