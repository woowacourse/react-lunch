import { SelectHTMLAttributes, memo } from 'react';
import { Options } from '../../../types';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Options;
}

function Select({ options, ...attributes }: SelectProps) {
  const createOptionElements = () => {
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  return (
    <label htmlFor={attributes.id}>
      <select {...attributes}>{createOptionElements()}</select>
    </label>
  );
}

export default memo(Select);
