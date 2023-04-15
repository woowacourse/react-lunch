import React, { ChangeEvent } from "react";
import { CATEGORIES, SORT_BY } from "../constants/constants";

type SelectProps = {
  setCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
  setSort: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = (props: SelectProps) => {
  return (
    <section className="restaurant-filter-container">
      <select
        name="category"
        id="category-filter"
        className="restaurant-filter"
        onChange={(event) => props.setCategory(event)}
      >
        {CATEGORIES.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select>

      <select
        name="sorting"
        id="sorting-filter"
        className="restaurant-filter"
        onChange={(event) => props.setSort(event)}
      >
        {SORT_BY.map((sortBy) => {
          return <option value={sortBy}>{sortBy}</option>;
        })}
      </select>
    </section>
  );
};

export default Select;
