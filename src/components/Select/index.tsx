import { ChangeEvent, Component } from 'react';
import { SelectProps } from '../../types/component';

class Select extends Component<SelectProps> {
  shouldComponentUpdate(nextProps: SelectProps) {
    return nextProps.options !== this.props.options;
  }

  handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const result = {
      [this.props.attributes.name]: target.value,
    };
    this.props.onChange(result);
  };

  createOptionElements = () => {
    const { options } = this.props;

    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  render() {
    const { attributes } = this.props;

    return (
      <label htmlFor={attributes.id}>
        <select
          name={attributes.name}
          id={attributes.id}
          className={attributes.className}
          onChange={this.handleChangeOption}
        >
          {this.createOptionElements()}
        </select>
      </label>
    );
  }
}

export default Select;
