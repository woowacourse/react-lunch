import { Component } from 'react';

interface Props {
  options: string[];
}

class Select extends Component<Props> {
  render() {
    return (
      <select>
        {this.props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
