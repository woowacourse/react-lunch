import React from 'react';

type selectorProps<T> = {
  selectedValue: T;
  optionList: Array<T>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

class Selector<T extends string> extends React.Component<selectorProps<T>> {
  render(): React.ReactNode {
    return (
      <select onChange={this.props.onChange}>
        {this.props.optionList.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
}

export default Selector;
