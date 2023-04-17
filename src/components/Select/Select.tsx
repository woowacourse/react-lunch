import { ChangeEvent } from 'react';
import { Options } from '../../types';

const Select = ({
  onChange,
  options,
  attributes,
}: {
  attributes: {
    id: string;
    name: string;
    className: string;
  };
  options: Options;
  onChange: CallableFunction;
}) => {
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

  return (
    <label htmlFor={attributes.id}>
      <select name={attributes.name} id={attributes.id} className={attributes.className} onChange={handleChangeOption}>
        {createOptionElements()}
      </select>
    </label>
  );
};

export default Select;
