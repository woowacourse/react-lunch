import React from 'react';
import * as styled from './DropdownFilter.styles';

type DropdownFilterProps = {
  options: readonly [string, ...string[]];
};

type DropdownFilterState = {
  selectedOption: string;
};

class DropdownFilter extends React.PureComponent<DropdownFilterProps, DropdownFilterState> {
  constructor(props: DropdownFilterProps) {
    super(props);

    this.state = { selectedOption: this.props.options[0] };
  }

  handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  render() {
    return (
      <styled.DropdownFilter value={this.state.selectedOption} onChange={this.handleSelectChange}>
        {this.props.options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </styled.DropdownFilter>
    );
  }
}

export default DropdownFilter;
