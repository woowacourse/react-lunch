import './style.css';
import { useState } from 'react';
import { FilterOption } from '../../types';
import { DEFAULT_OPTIONS, RESTAURANT_CATEGORY_OPTION, SELECT_ATTRIBUTES, SORT_BY } from '../../constants';
import Select from '../Select/Select';

const FilterSection = ({ onChange }: { onChange: CallableFunction }) => {
  const [currentOption, setCurrentOption] = useState<FilterOption>({
    category: DEFAULT_OPTIONS.CATEGORY,
    sortBy: DEFAULT_OPTIONS.SORT_BY,
  });

  const handleSelectChange = (selectedOption: FilterOption) => {
    const updatedOption = {
      ...currentOption,
      ...selectedOption,
    };

    setCurrentOption(updatedOption);
    onChange(updatedOption);
  };

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
