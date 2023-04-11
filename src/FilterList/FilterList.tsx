import React, { Component } from 'react';
import './FilterList.css';

interface FilterProps {
  name: string[];
}

class FilterList extends Component<FilterProps> {
  render() {
    const { name } = this.props;
    const option = name.map((category, index) => {
      return (
        <option key={index} value={category}>
          {category}
        </option>
      );
    });

    return <select className="restaurant-filter">{option}</select>;
  }
}

export default FilterList;
