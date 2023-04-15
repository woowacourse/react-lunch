import React, { ChangeEventHandler, Component } from 'react';

import './FilterList.css';

interface FilterProps {
  type: string;
  name: string[];
  changeEvent: ChangeEventHandler<HTMLSelectElement>;
}

class FilterList extends Component<FilterProps> {
  render() {
    const { type, name, changeEvent } = this.props;
    const option = name.map((category) => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });

    return (
      <select className={`restaurant-filter ${type}`} onChange={changeEvent}>
        {option}
      </select>
    );
  }
}

export default FilterList;
