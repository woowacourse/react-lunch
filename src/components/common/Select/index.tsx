import { ChangeEvent, Component } from 'react';

interface Props {
  options: string[];
  onChange: (value: string) => void;
}

class Select extends Component<Props> {
  handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <select onChange={this.handleChange}>
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
