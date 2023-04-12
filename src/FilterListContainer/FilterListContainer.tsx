import React, { Component } from 'react';
import FilterList from './FilterList';

import './FilterList.css';

interface FilterListContainerProps {
  selectedCategory: string;
  selectedSort: string;
  categoryEvent: any;
  sortEvent: any;
}

class FilterListContainer extends Component<FilterListContainerProps> {
  render() {
    return (
      <section className="restaurant-filter-container">
        <FilterList
          changeEvent={this.props.categoryEvent}
          title="category"
          name={['전체', '한식', '중식', '양식', '일식', '아시안', '기타']}
        />
        <FilterList
          changeEvent={this.props.sortEvent}
          title="sort"
          name={['이름순', '거리순']}
        />
      </section>
    );
  }
}

export default FilterListContainer;
