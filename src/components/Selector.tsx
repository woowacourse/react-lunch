import React from 'react';
import '../styles/Selector.css';

interface Props<T> {
  selectedValue: T;
  optionList: Array<T>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Selector<T extends string>(props: Props<T>) {
  return (
    <select onChange={props.onChange} defaultValue={props.selectedValue}>
      {props.optionList.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Selector;
