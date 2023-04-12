import React from 'react';

type SelectProps = {
  name: string;
  options: any[];
  onChangeFilterOptions: (e: any) => void;
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
