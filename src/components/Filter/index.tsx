import "./index.css";
import { CategoryOption, SortOption } from "../../types/restaurant";
import { CATEGORY_LIST, SORT_LIST } from "../../data/constants";

interface FilterProps {
  setSelectedCategory: (category: CategoryOption) => void;
  setSelectedSort: (sort: SortOption) => void;
}

const Filter = (props: FilterProps) => {
  const { setSelectedCategory, setSelectedSort } = props;

  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value as CategoryOption);
  };

  const onChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSort(e.target.value as SortOption);
  };

  return (
    <section className="restaurant-filter-container">
      <select
        name="category"
        id="category-filter"
        className="restaurant-filter"
        onChange={onChangeCategory}
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
        onChange={onChangeSort}
      >
        {Object.entries(SORT_LIST).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Filter;
