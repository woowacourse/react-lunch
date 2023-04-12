import "./index.css";
import { Component } from "react";
interface State {
  selectedCategory: string;
  selectedSort: string;
}

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

export default class Filter extends Component {
  state: State = {
    selectedCategory: "all",
    selectedSort: "name",
  };

  render() {
    return (
      <section className="restaurant-filter-container">
        <select name="category" id="category-filter" className="restaurant-filter">
          {Object.entries(categoryList).map(([key, value]) => (
            <option value={key}>{value}</option>
          ))}
        </select>
        <select name="sorting" id="sorting-filter" className="restaurant-filter">
          {Object.entries(sortList).map(([key, value]) => (
            <option value={key}>{value}</option>
          ))}
        </select>
      </section>
    );
  }
}
