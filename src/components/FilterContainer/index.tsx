import CategoryFilter from './CategoryFilter';
import SortFilter from './SortFilter';
import './FilterContainer.css';
import {
  RestaurantCategoryFilterOption,
  RestaurantSortOption,
} from '../../helpers/RestaurantHelper';

type FilterContainerProps = {
  onChangeCategoryFilter: (category: RestaurantCategoryFilterOption) => void;
  onChangeSortFilter: (sortOption: RestaurantSortOption) => void;
};

export default function FilterContainer({
  onChangeCategoryFilter,
  onChangeSortFilter,
}: FilterContainerProps) {
  return (
    <section className="restaurant-filter-container">
      <CategoryFilter onChange={onChangeCategoryFilter} />
      <SortFilter onChange={onChangeSortFilter} />
    </section>
  );
}
