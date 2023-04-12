import React, { Component } from 'react';
import './FilterList.css';
import FilterList from './FilterList';

interface FilterListContainerProps {}

interface FilterListContainerState {
  selectedCategory: string;
  selectedSort: string;
}

class FilterListContainer extends Component<
  FilterListContainerProps,
  FilterListContainerState
> {
  constructor(props: FilterListContainerProps) {
    super(props);

    this.state = {
      selectedCategory: '전체',
      selectedSort: '이름순',
    };
  }

  handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      ...this.state,
      selectedCategory: e.target.value,
    });
  };

  handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      ...this.state,
      selectedSort: e.target.value,
    });
  };

  render() {
    return (
      <section className="restaurant-filter-container">
        <FilterList
          changeEvent={this.handleCategoryChange}
          title="category"
          name={['전체', '한식', '중식', '양식', '일식', '아시안', '기타']}
        />
        <FilterList
          changeEvent={this.handleSortChange}
          title="sort"
          name={['이름순', '거리순']}
        />
      </section>
    );
  }
}

export default FilterListContainer;
