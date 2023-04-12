import { Component } from 'react';
import { FilterOption } from '../types';
import { FilterSectionProps, FilterSectionState } from '../types';
import { RESTAURANT_CATEGORY_OPTION, SORT_BY } from '../constants';
import Select from './Select';

class FilterSection extends Component<FilterSectionProps, FilterSectionState> {
  state: FilterSectionState;

  constructor(props: FilterSectionProps) {
    super(props);

    this.state = {
      category: '전체',
      sortBy: '이름순',
    };
  }

  handleSelectChange(option: FilterOption) {
    this.setState(
      {
        ...this.state,
        ...option,
      },
      () => {
        this.handleFilterChange();
      }
    );
  }

  handleFilterChange() {
    this.props.onChange(this.state.category, this.state.sortBy);
  }

  render() {
    return (
      <div>
        <Select
          options={RESTAURANT_CATEGORY_OPTION}
          attributes={{ id: 'category-filter', name: 'category', className: 'restaurant-filter' }}
          onChange={(option: FilterOption) => this.handleSelectChange(option)}
        />
        <Select
          options={SORT_BY}
          attributes={{ id: 'sortBy-filter', name: 'sortBy', className: 'restaurant-filter' }}
          onChange={(option: FilterOption) => this.handleSelectChange(option)}
        />
      </div>
    );
  }
}

export default FilterSection;
