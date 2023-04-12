import React, { ChangeEventHandler, Component } from 'react';
import './FilterList.css';

interface FilterProps {
  title: string;
  name: string[];
  changeEvent: ChangeEventHandler<HTMLSelectElement>;
}

class FilterList extends Component<FilterProps> {
  render() {
    const { title, name, changeEvent } = this.props;
    const option = name.map((category, index) => {
      return (
        <option key={index} value={category}>
          {category}
        </option>
      );
    });

    if (title === 'category') {
      return (
        <select className="restaurant-filter category" onChange={changeEvent}>
          {option}
        </select>
      );
    }

    if (title === 'sort') {
      return (
        <select className="restaurant-filter sort" onChange={changeEvent}>
          {option}
        </select>
      );
    }
  }
}

export default FilterList;
