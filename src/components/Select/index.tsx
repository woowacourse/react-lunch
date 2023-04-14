import { ChangeEvent, Component, SelectHTMLAttributes } from 'react';
import { Options } from '../../types';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Options;
  onChangeOption: CallableFunction;
}

class Select extends Component<SelectProps> {
  shouldComponentUpdate(nextProps: SelectProps) {
    return nextProps.options !== this.props.options;
  }

  handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!this.props.name) return;

    const target = event.target as HTMLSelectElement;
    const result = {
      [this.props.name]: target.value,
    };
    this.props.onChangeOption(result);
  };

  createOptionElements = (options: Options) => {
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  render() {
    const { options, ...attributes } = this.props;

    return (
      <label htmlFor={attributes.id}>
        <select {...attributes}>{this.createOptionElements(options)}</select>
      </label>
    );
  }
}

export default Select;
