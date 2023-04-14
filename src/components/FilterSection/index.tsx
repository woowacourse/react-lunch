import './style.css';
import { PureComponent } from 'react';
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

class FilterSection extends PureComponent<FilterSectionProps, FilterSectionState> {
  state: FilterSectionState;

  constructor(props: FilterSectionProps) {
    super(props);

    this.state = {
      category: DEFAULT_CATEGORY,
      sortBy: DEFAULT_SORT_BY,
    };
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
    console.log('rendering filter section');

    return (
      <section className="restaurant-filter-container">
        <Select
          attributes={SELECT_ATTRIBUTES.CATEGORY_FILTER}
          options={RESTAURANT_CATEGORY_OPTION}
          onChange={this.handleSelectChange}
        />
        <Select
          attributes={SELECT_ATTRIBUTES.SORT_BY_FILTER}
          options={SORT_BY}
          onChange={this.handleSelectChange}
        />
      </section>
    );
  }
}

export default FilterSection;
