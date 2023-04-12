import { Component } from 'react';

interface Props {
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

class Select extends Component<Props> {
  render() {
    return (
      <select onChange={this.props.onChange}>
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
