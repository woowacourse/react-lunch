import {
  RESTAURANT_CATEGORY,
  SORTING_OPTION,
} from '../constants/filterOptions';

interface FilterBarProps {
  onChangeCategory: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterBar = (props: FilterBarProps) => {
  const { onChangeCategory, onChangeSort } = props;

  return (
    <section className="restaurant-filter-container">
      <select
        onChange={onChangeCategory}
        name="category"
        id="category-filter"
        className="restaurant-filter"
      >
        {Object.values(RESTAURANT_CATEGORY).map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      <select
        onChange={onChangeSort}
        name="sorting"
        id="sorting-filter"
        className="restaurant-filter"
      >
        {Object.values(SORTING_OPTION).map((sort) => (
          <option value={sort}>{sort}</option>
        ))}
      </select>
    </section>
  );
};

export default FilterBar;
