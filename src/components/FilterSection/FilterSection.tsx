import './style.css';
import { ChangeEvent, memo, useState } from 'react';
import { FilterOption } from '../../types';
import {
  DEFAULT_CATEGORY,
  DEFAULT_SORT_BY,
  RESTAURANT_CATEGORY_OPTION,
  SELECT_ATTRIBUTES,
  SORT_BY,
} from '../../constants';
import { isElementOfType } from '../../utils/eventUtils';
import Select from '../common/Select/Select';

interface FilterSectionProps {
  onChange: (displayStatus: FilterOption) => void;
}

function FilterSection({ onChange }: FilterSectionProps) {
  const [displayStatus, setDisplayStatus] = useState({
    category: DEFAULT_CATEGORY,
    sortBy: DEFAULT_SORT_BY,
  });

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!isElementOfType<HTMLSelectElement>(event)) return;

    const updatedDisplayStatus = {
      ...displayStatus,
      [event.target.name]: event.target.value,
    };

    setDisplayStatus(updatedDisplayStatus);
    onChange(updatedDisplayStatus);
  };

  return (
    <section className="restaurant-filter-container">
      <Select
        options={RESTAURANT_CATEGORY_OPTION}
        onChange={handleSelectChange}
        {...SELECT_ATTRIBUTES.CATEGORY_FILTER}
      />
      <Select
        options={SORT_BY}
        onChange={handleSelectChange}
        {...SELECT_ATTRIBUTES.SORT_BY_FILTER}
      />
    </section>
  );
}

export default memo(FilterSection);
