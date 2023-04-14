import React from 'react';
import '../styles/Selector.css';

interface Props<T> {
  selectedValue: T;
  optionList: Array<T>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

class Selector<T extends string> extends React.Component<Props<T>> {
  render(): React.ReactNode {
    return (
      <select onChange={this.props.onChange} defaultValue={this.props.selectedValue}>
        {this.props.optionList.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
}

export default Selector;
