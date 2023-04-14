import React, { Component, ReactNode } from 'react';
import St from './styled';

interface SelectProps {
  options: readonly string[];
  onChange(value: string): void;
}

class Select extends Component<SelectProps> {
  render(): ReactNode {
    const { options, onChange, ...props } = this.props;

    return (
      <St.Layout onChange={(e) => onChange(e.target.value)} {...props}>
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
