import React from 'react';

import { Category, SelectOption, Sorting } from '../util/type';

type SelectProps = {
  name: string;
  options: SelectOption<Category | Sorting>[];
  onChangeFilterOptions: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

class Select extends React.PureComponent<SelectProps> {
  render() {
    return (
      <select
        name={this.props.name}
        id="category-filter"
        className="restaurant-filter"
        onChange={this.props.onChangeFilterOptions}
      >
        {this.props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.textContent}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
