import { ChangeEvent, PureComponent } from 'react';
import { Options } from '../../types';

interface SelectProps {
  attributes: {
    id: string;
    name: string;
    className: string;
  };
  options: Options;
  onChange: CallableFunction;
}

class Select extends PureComponent<SelectProps> {
  handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const result = {
      [this.props.attributes.name]: target.value,
    };
    this.props.onChange(result);
  };

  createOptionElements = () => {
    return this.props.options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  render() {
    console.log('rendering Select');

    return (
      <label htmlFor={this.props.attributes.id}>
        <select onChange={this.handleChangeOption} {...this.props.attributes}>
          {this.createOptionElements()}
        </select>
      </label>
    );
  }
}

export default Select;
