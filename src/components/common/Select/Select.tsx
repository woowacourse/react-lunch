import { SelectHTMLAttributes, memo } from 'react';
import { Options } from '../../../types';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Options;
  elementStyle?: string;
}

function Select({ options, elementStyle, className, ...attributes }: SelectProps) {
  const createOptionElements = () => {
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  return (
    <label htmlFor={attributes.id}>
      <select className={`${className} ${elementStyle}`} {...attributes}>
        {createOptionElements()}
      </select>
    </label>
  );
}

export default memo(Select);
