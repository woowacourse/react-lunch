import React, { ChangeEventHandler } from 'react';
import FilterList from './FilterList';

import './FilterList.css';

interface FilterListContainerProps {
  categoryEvent: ChangeEventHandler<HTMLSelectElement>;
  sortEvent: ChangeEventHandler<HTMLSelectElement>;
}

const FilterListContainer = ({
  categoryEvent,
  sortEvent,
}: FilterListContainerProps) => {
  return (
    <section className="restaurant-filter-container">
      <FilterList
        changeEvent={categoryEvent}
        type="category"
        name={['전체', '한식', '중식', '양식', '일식', '아시안', '기타']}
      />
      <FilterList
        changeEvent={sortEvent}
        type="sort"
        name={['이름순', '거리순']}
      />
    </section>
  );
};

export default FilterListContainer;
