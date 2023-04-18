import "./index.css";
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
  onChangeCategory: (category: CategoryOption) => void;
  onChangeSort: (sort: SortOption) => void;
}

const Filter = ({ onChangeCategory, onChangeSort }: FilterProps) => {
  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeCategory(event.target.value as CategoryOption);
  };

  const handleChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeSort(event.target.value as SortOption);
  };

  return (
    <section className="restaurant-filter-container">
      <select name="category" id="category-filter" className="restaurant-filter" onChange={handleChangeCategory}>
        {Object.entries(CATEGORY_LIST).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
      <select name="sorting" id="sorting-filter" className="restaurant-filter" onChange={handleChangeSort}>
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
