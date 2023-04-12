import React from 'react';
import './SelectBox.css';
import { SelectBoxProps } from '../../types';

class SelectBox extends React.Component<SelectBoxProps> {
  constructor(props: SelectBoxProps) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (this.props.onChangeCategory) this.props.onChangeCategory(event);
    if (this.props.onChangeCriterion) this.props.onChangeCriterion(event);
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
