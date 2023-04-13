import React from 'react';
import './SelectBox.css';

interface SelectBoxProps {
  filter: object;
  onOptionChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

class SelectBox extends React.Component<SelectBoxProps> {
  constructor(props: SelectBoxProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (this.props.onOptionChange) this.props.onOptionChange(event);
  }

  render() {
    return (
      <select className="restaurant-filter" onChange={this.onChange}>
        {Object.entries(this.props.filter).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>
    );
  }
}

export default SelectBox;
