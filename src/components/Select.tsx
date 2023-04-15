import React, { ChangeEvent, useCallback } from "react";
import { CATEGORIES, SORT_BY } from "../constants/constants";
import type { Category, SortBy } from "../types/Restaurant";
import { isCategory, isSortBy } from "../types/Restaurant.guard";

type SelectProps = {
  setCategory: (newCategory: Category) => void;
  setSort: (newSort: SortBy) => void;
};

const Select = (props: SelectProps) => {
  const onChangeCategory = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      if (isCategory(event.target.value)) {
        props.setCategory(event.target.value);
      }
    },
    [props]
  );

  const onChangeSort = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      if (isSortBy(event.target.value)) {
        props.setSort(event.target.value);
      }
    },
    [props]
  );

  return (
    <section className="restaurant-filter-container">
      <select
        name="category"
        id="category-filter"
        className="restaurant-filter"
        onChange={(event) => onChangeCategory(event)}
      >
        {CATEGORIES.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select>

      <select
        name="sorting"
        id="sorting-filter"
        className="restaurant-filter"
        onChange={(event) => onChangeSort(event)}
      >
        {SORT_BY.map((sortBy) => {
          return <option value={sortBy}>{sortBy}</option>;
        })}
      </select>
    </section>
  );
};

export default Select;
