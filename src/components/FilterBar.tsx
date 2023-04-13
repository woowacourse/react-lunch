import { PureComponent } from 'react';
import Select from './Select';
import {
  RESTAURANT_CATEGORY,
  SORTING_OPTION,
} from '../constants/filterOptions';

interface FilterBarProps {
  onChangeCategory: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default class FilterBar extends PureComponent<FilterBarProps> {
  constructor(props: FilterBarProps) {
    super(props);
  }

  render() {
    const { onChangeCategory, onChangeSort } = this.props;
    return (
      <section className="restaurant-filter-container">
        <Select>
          {() => (
            <select
              onChange={onChangeCategory}
              name="category"
              id="category-filter"
              className="restaurant-filter"
            >
              <option value="전체">{RESTAURANT_CATEGORY.all}</option>
              <option value="한식">{RESTAURANT_CATEGORY.korea}</option>
              <option value="중식">{RESTAURANT_CATEGORY.chinese}</option>
              <option value="일식">{RESTAURANT_CATEGORY.japanese}</option>
              <option value="양식">{RESTAURANT_CATEGORY.western}</option>
              <option value="아시안">{RESTAURANT_CATEGORY.asian}</option>
              <option value="기타">{RESTAURANT_CATEGORY.etc}</option>
            </select>
          )}
        </Select>
        <Select>
          {() => (
            <select
              onChange={onChangeSort}
              name="sorting"
              id="sorting-filter"
              className="restaurant-filter"
            >
              <option value="name">{SORTING_OPTION.name}</option>
              <option value="distance">{SORTING_OPTION.distance}</option>
            </select>
          )}
        </Select>
      </section>
    );
  }
}
