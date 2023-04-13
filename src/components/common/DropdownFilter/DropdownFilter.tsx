import React from 'react';
import * as styled from './DropdownFilter.styles';

type DropdownFilterProps<Value> = {
  options: Array<{
    label: string;
    value: Value;
  }>;
  onChange: (value: { label: string; value: Value }) => void;
};

type DropdownFilterState<Value> = {
  selectedOption: {
    label: string;
    value: Value;
  };
};

class DropdownFilter<Value> extends React.PureComponent<
  DropdownFilterProps<Value>,
  DropdownFilterState<Value>
> {
  constructor(props: DropdownFilterProps<Value>) {
    super(props);

    this.state = { selectedOption: this.props.options[0] };
  }

  componentDidMount(): void {
    const { onChange } = this.props;
    const { selectedOption } = this.state;
    onChange(selectedOption);
  }

  handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { options, onChange } = this.props;
    const selectedOption = options.find((option) => option.label === event.target.value)!;
    this.setState({ selectedOption });
    onChange(selectedOption);
  };

  render() {
    return (
      <styled.DropdownFilter
        value={this.state.selectedOption.label}
        onChange={this.handleSelectChange}
        data-cy="dropdown-filter"
      >
        {this.props.options.map(({ label }, index) => (
          <option key={label} data-index={index}>
            {label}
          </option>
        ))}
      </styled.DropdownFilter>
    );
  }
}

export default DropdownFilter;
