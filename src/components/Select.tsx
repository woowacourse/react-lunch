import React, { ChangeEvent } from "react";
import { CATEGORIES, SORT_BY } from "../constants/constants";

import type { Category, SortBy } from "../types/Restaurant";

type SelectProps = {
  setCategory: (newCategory: Category) => void;
  setSort: (newSort: SortBy) => void;
};

const isCategory = (category: string): category is Category => {
  for (const c of CATEGORIES) {
    if (c === category) return true;
  }
  return false;
};

const isSortBy = (sortBy: string): sortBy is SortBy => {
  for (const s of SORT_BY) {
    if (s === sortBy) return true;
  }
  return false;
};

class Select extends React.Component<SelectProps> {
  onChangeCategory(event: ChangeEvent<HTMLSelectElement>) {
    if (isCategory(event.target.value)) {
      this.props.setCategory(event.target.value);
    }
  }

  onChangeSort(event: ChangeEvent<HTMLSelectElement>) {
    if (isSortBy(event.target.value)) {
      this.props.setSort(event.target.value);
    }
  }

  render() {
    return (
      <section className="restaurant-filter-container">
        <select
          name="category"
          id="category-filter"
          className="restaurant-filter"
          onChange={(event) => this.onChangeCategory(event)}
        >
          <option value="전체">전체</option>
          <option value="한식">한식</option>
          <option value="중식">중식</option>
          <option value="일식">일식</option>
          <option value="양식">양식</option>
          <option value="아시안">아시안</option>
          <option value="기타">기타</option>
        </select>

        <select
          name="sorting"
          id="sorting-filter"
          className="restaurant-filter"
          onChange={(event) => this.onChangeSort(event)}
        >
          <option value="이름순">이름순</option>
          <option value="거리순">거리순</option>
        </select>
      </section>
    );
  }
}

export default Select;
