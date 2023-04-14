import './style.css';
import { Component } from 'react';
import { FilterOption } from '../../types';
import {
  DEFAULT_CATEGORY,
  DEFAULT_SORT_BY,
  RESTAURANT_CATEGORY_OPTION,
  SELECT_ATTRIBUTES,
  SORT_BY,
} from '../../constants';
import Select from '../Select';

interface FilterSectionProps {
  onChange: CallableFunction;
}

interface FilterSectionState {
  category: string;
  sortBy: string;
}

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
          // attributes={SELECT_ATTRIBUTES.CATEGORY_FILTER}
          onChangeOption={this.handleSelectChange}
          {...SELECT_ATTRIBUTES.CATEGORY_FILTER}
        />
        <Select
          options={SORT_BY}
          {...SELECT_ATTRIBUTES.SORT_BY_FILTER}
          // attributes={SELECT_ATTRIBUTES.SORT_BY_FILTER}
          onChangeOption={this.handleSelectChange}
        />
      </section>
    );
  }
}

export default FilterSection;
