import './style.css';
import { Component } from 'react';
import { FilterOption } from '../../types';
import { FilterSectionProps, FilterSectionState } from '../../types';
import { RESTAURANT_CATEGORY_OPTION, SORT_BY } from '../../constants';
import Select from '../Select';

class FilterSection extends Component<FilterSectionProps, FilterSectionState> {
  state: FilterSectionState;

  constructor(props: FilterSectionProps) {
    super(props);

    // TODO: 상수화
    this.state = {
      category: '전체',
      sortBy: '이름순',
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

  // TODO: 상수화?
  render() {
    return (
      <section className="restaurant-filter-container">
        <Select
          options={RESTAURANT_CATEGORY_OPTION}
          attributes={{ id: 'category-filter', name: 'category', className: 'restaurant-filter' }}
          onChange={this.handleSelectChange}
        />
        <Select
          options={SORT_BY}
          attributes={{ id: 'sortBy-filter', name: 'sortBy', className: 'restaurant-filter' }}
          onChange={this.handleSelectChange}
        />
      </section>
    );
  }
}

export default FilterSection;
