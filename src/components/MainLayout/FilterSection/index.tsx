import { Component } from 'react';
import './style.css';

import CategoryFilter from './CategoryFilter';
import Sorting from './Sorting';

interface Props {
  onChangeCategory: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeSorting: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

class FilterSection extends Component<Props> {
  render() {
    return (
      <section className="filter-section">
        <CategoryFilter onChangeCategory={this.props.onChangeCategory} />
        <Sorting onChangeSorting={this.props.onChangeSorting} />
      </section>
    );
  }
}

export default FilterSection;
