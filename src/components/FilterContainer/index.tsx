import { Component } from 'react';
import CategoryFilter from './CategoryFilter';
import SortFilter from './SortFilter';
import './FilterContainer.css';
import { RestaurantCategoryFilterOption, RestaurantSortOption } from '../../RestaurantUtils';

type FilterContainerProps = {
  onChangeCategoryFilter: (category: RestaurantCategoryFilterOption) => void;
  onChangeSortFilter: (sortOption: RestaurantSortOption) => void;
};

export default class FilterContainer extends Component<FilterContainerProps> {
  render() {
    return (
      <section className="restaurant-filter-container">
        <CategoryFilter onChange={this.props.onChangeCategoryFilter.bind(this)} />
        <SortFilter onChange={this.props.onChangeSortFilter.bind(this)} />
      </section>
    );
  }
}
