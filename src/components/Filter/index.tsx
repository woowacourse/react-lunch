import "./index.css";
import { Component } from "react";

const categoryList = {
  all: "전체",
  korean: "한식",
  japanese: "일식",
  western: "양식",
  asian: "아시안",
  etc: "기타",
};

const sortList = {
  name: "이름순",
  distance: "거리순",
};

interface Props {
  setSelectedCategory: (category: string) => void;
  setSelectedSort: (sort: string) => void;
}

export default class Filter extends Component<Props> {
  setSelectedCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    this.props.setSelectedCategory(event.target.value);
  }

  setSelectedSort(event: React.ChangeEvent<HTMLSelectElement>) {
    this.props.setSelectedSort(event.target.value);
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
          {Object.entries(categoryList).map(([key, value]) => (
            <option value={key}>{value}</option>
          ))}
        </select>
        <select
          name="sorting"
          id="sorting-filter"
          className="restaurant-filter"
          onChange={this.setSelectedSort.bind(this)}
        >
          {Object.entries(sortList).map(([key, value]) => (
            <option value={key}>{value}</option>
          ))}
        </select>
      </section>
    );
  }
}
