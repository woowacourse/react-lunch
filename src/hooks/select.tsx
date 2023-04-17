import { ChangeEvent } from 'react';
import { Options } from '../types';

export const useSelect = (
  attributes: {
    id: string;
    name: string;
    className: string;
  },
  options: Options,
  onChange: CallableFunction
) => {
  const handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;

    onChange({
      [attributes.name]: target.value,
    });
  };

  const createOptionElements = () => {
    return options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  return { handleChangeOption, createOptionElements };
};
