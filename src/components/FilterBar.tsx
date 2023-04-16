import {
  RESTAURANT_CATEGORY,
  SORTING_OPTION,
} from '../constants/filterOptions';

interface FilterBarProps {
  onChangeCategory: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterBar = ({
  onChangeCategory,
  onChangeSort,
}: FilterBarProps) => {
  return (
    <section className="restaurant-filter-container">
      <select
        onChange={onChangeCategory}
        name="category"
        id="category-filter"
        className="restaurant-filter"
      >
        {Object.values(RESTAURANT_CATEGORY).map((category, index) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </select>

      <select
        onChange={onChangeSort}
        name="sorting"
        id="sorting-filter"
        className="restaurant-filter"
      >
        {Object.values(SORTING_OPTION).map((sortingName, index) => (
          <option value={sortingName} key={index}>
            {sortingName}
          </option>
        ))}
      </select>
    </section>
  );
};
