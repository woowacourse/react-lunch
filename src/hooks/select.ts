import { ChangeEvent } from 'react';

export const useSelect = (
  attributes: {
    id: string;
    name: string;
    className: string;
  },
  onChange: CallableFunction
) => {
  const handleChangeOption = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;

    onChange({
      [attributes.name]: target.value,
    });
  };

  return { handleChangeOption };
};
