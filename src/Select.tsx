import React from 'react';

import { Category, SelectOption, Sort } from './type';

type SelectProps = {
  name: string;
  options: SelectOption<Category | Sort>[];
  onChangeFilterOptions: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

class Select extends React.Component<SelectProps> {
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
