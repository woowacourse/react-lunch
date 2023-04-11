import { Component } from 'react';
import CategoryFilter from './CategoryFilter';
import SortFilter from './SortFilter';

export default class FilterContainer extends Component {
  render() {
    return (
      <section className="restaurant-filter-container">
        <CategoryFilter />
        <SortFilter />
      </section>
    );
  }
}
