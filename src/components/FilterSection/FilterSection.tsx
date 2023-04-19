import './style.css';
import { RESTAURANT_CATEGORY_OPTION, SELECT_ATTRIBUTES, SORT_BY } from '../../constants';
import { useFilterSection } from '../../hooks/filterSection';
import Select from '../Select/Select';

const FilterSection = ({ setCurrentRestaurantList }: { setCurrentRestaurantList: CallableFunction }) => {
  const handleSelectChange = useFilterSection(setCurrentRestaurantList);

  return (
    <section className="restaurant-filter-container">
      <Select
        options={RESTAURANT_CATEGORY_OPTION}
        attributes={SELECT_ATTRIBUTES.CATEGORY_FILTER}
        onChange={handleSelectChange}
      />
      <Select options={SORT_BY} attributes={SELECT_ATTRIBUTES.SORT_BY_FILTER} onChange={handleSelectChange} />
    </section>
  );
};

export default FilterSection;
