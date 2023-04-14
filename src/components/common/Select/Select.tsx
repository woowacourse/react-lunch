import { ChangeEvent, memo } from 'react';
import { Options } from '../../../types';

interface SelectProps {
  attributes: {
    id: string;
    name: string;
    className: string;
  };
  options: Options;
  onChange: CallableFunction;
}

function Select({ attributes, options, onChange }: SelectProps) {
  const handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    const result = {
      [attributes.name]: target.value,
    };
    onChange(result);
  };

  const createOptionElements = () => {
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  return (
    <label htmlFor={attributes.id}>
      <select onChange={handleChangeOption} {...attributes}>
        {createOptionElements()}
      </select>
    </label>
  );
}

export default memo(Select);
