import { Option } from "../../types/types";
import Filter from "../Filter/Filter";
import styles from "./RestaurantFilter.module.css";
import { RestaurantFilterProps } from "../../types/types";

const RestaurantFilter = ({
  onCategoryChange,
  onSortingChange,
}: RestaurantFilterProps) => {
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onCategoryChange(event.target.value);
  };

  const handleSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortingChange(event.target.value);
  };

  const categoryOptions: Option[] = [
    { value: "전체", label: "전체" },
    { value: "한식", label: "한식" },
    { value: "중식", label: "중식" },
    { value: "일식", label: "일식" },
    { value: "양식", label: "양식" },
    { value: "아시안", label: "아시안" },
    { value: "기타", label: "기타" },
  ];

  const sortingOptions: Option[] = [
    { value: "이름순", label: "이름순" },
    { value: "거리순", label: "거리순" },
  ];

  return (
    <section className={styles.container}>
      <Filter
        name="category"
        options={categoryOptions}
        onChange={handleCategoryChange}
      />
      <Filter
        name="sorting"
        options={sortingOptions}
        onChange={handleSortingChange}
      />
    </section>
  );
};

export default RestaurantFilter;
