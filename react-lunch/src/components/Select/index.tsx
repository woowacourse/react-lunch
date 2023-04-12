import React, { Component, ReactNode } from 'react';
import St from './styled';

interface SelectProps {
  options: string[];
  onChange: VoidFunction;
}

class Select extends Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
  }

  render(): ReactNode {
    const { options, onChange } = this.props;

    return (
      <St.Layout onChange={onChange}>
        {options.map((option) => (
          <St.Option value={option} key={option}>
            {option}
          </St.Option>
        ))}
      </St.Layout>
    );
  }
}

export default Select;
