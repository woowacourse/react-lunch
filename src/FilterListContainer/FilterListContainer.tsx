import React, { ChangeEventHandler, Component } from 'react';
import FilterList from './FilterList';

import './FilterList.css';

interface FilterListContainerProps {
  selectedCategory: string;
  selectedSort: string;
  categoryEvent: ChangeEventHandler<HTMLSelectElement>;
  sortEvent: ChangeEventHandler<HTMLSelectElement>;
}

class FilterListContainer extends Component<FilterListContainerProps> {
  render() {
    return (
      <section className="restaurant-filter-container">
        <FilterList
          changeEvent={this.props.categoryEvent}
          type="category"
          name={['전체', '한식', '중식', '양식', '일식', '아시안', '기타']}
        />
        <FilterList
          changeEvent={this.props.sortEvent}
          type="sort"
          name={['이름순', '거리순']}
        />
      </section>
    );
  }
}

export default FilterListContainer;
