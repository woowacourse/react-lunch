import './style.css';
import { useState } from 'react';
import { FilterOption } from '../../types';
import {
  DEFAULT_CATEGORY,
  DEFAULT_SORT_BY,
  RESTAURANT_CATEGORY_OPTION,
  SELECT_ATTRIBUTES,
  SORT_BY,
} from '../../constants';
import Select from '../common/Select/Select';

interface FilterSectionProps {
  onChange: (displayStatus: FilterOption) => void;
}

function FilterSection({ onChange }: FilterSectionProps) {
  const [displayStatus, setDisplayStatus] = useState({
    category: DEFAULT_CATEGORY,
    sortBy: DEFAULT_SORT_BY,
  });

  const handleSelectChange = (option: FilterOption) => {
    const updatedDisplayStatus = {
      ...displayStatus,
      ...option,
    };

    setDisplayStatus(updatedDisplayStatus);
    onChange(updatedDisplayStatus);
  };

  return (
    <section className="restaurant-filter-container">
      <Select
        attributes={SELECT_ATTRIBUTES.CATEGORY_FILTER}
        options={RESTAURANT_CATEGORY_OPTION}
        onChange={handleSelectChange}
      />
      <Select
        attributes={SELECT_ATTRIBUTES.SORT_BY_FILTER}
        options={SORT_BY}
        onChange={handleSelectChange}
      />
    </section>
  );
}

export default FilterSection;
