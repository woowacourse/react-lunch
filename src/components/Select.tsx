import { ChangeEvent, Component, ReactNode } from 'react';
import { SelectProps } from '../types';

class Select extends Component<SelectProps> {
  handleChangeOption(event: ChangeEvent<HTMLSelectElement>) {
    const target = event.target as HTMLSelectElement;
    const result = {
      [this.props.attributes.name]: target.value,
    };
    this.props.onChange(result);
  }

  render(): ReactNode {
    const { attributes, options } = this.props;

    return (
      <>
        <label htmlFor={attributes.id}></label>
        <select
          name={attributes.name}
          id={attributes.id}
          className={attributes.className}
          onChange={(event) => this.handleChangeOption(event)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </>
    );
  }
}

export default Select;
