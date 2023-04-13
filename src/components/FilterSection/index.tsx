import './style.css';
import { Component } from 'react';
import { FilterOption } from '../../types';
import { FilterSectionProps, FilterSectionState } from '../../types/component';
import {
  DEFAULT_CATEGORY,
  DEFAULT_SORT_BY,
  RESTAURANT_CATEGORY_OPTION,
  SELECT_ATTRIBUTES,
  SORT_BY,
} from '../../constants';
import Select from '../Select';

class FilterSection extends Component<FilterSectionProps, FilterSectionState> {
  state: FilterSectionState;

  constructor(props: FilterSectionProps) {
    super(props);

    this.state = {
      category: DEFAULT_CATEGORY,
      sortBy: DEFAULT_SORT_BY,
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  handleSelectChange = (option: FilterOption) => {
    this.setState(
      {
        ...this.state,
        ...option,
      },
      () => {
        this.props.onChange(this.state.category, this.state.sortBy);
      }
    );
  };

  render() {
    return (
      <section className="restaurant-filter-container">
        <Select
          options={RESTAURANT_CATEGORY_OPTION}
          attributes={SELECT_ATTRIBUTES.CATEGORY_FILTER}
          onChange={this.handleSelectChange}
        />
        <Select
          options={SORT_BY}
          attributes={SELECT_ATTRIBUTES.SORT_BY_FILTER}
          onChange={this.handleSelectChange}
        />
      </section>
    );
  }
}

export default FilterSection;
