import { Component } from 'react';

type Option = {
  value: string;
  text: string;
};

type FilterProps = {
  id: string;
  name: string;
  options: Option[];
  onChange: () => void;
};

export default class Filter extends Component<FilterProps> {
  render() {
    const { name, id, options, onChange } = this.props;
    return (
      <select name={name} id={id} className="restaurant-filter" onChange={onChange}>
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    );
  }
}
