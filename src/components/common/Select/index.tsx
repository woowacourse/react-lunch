import { ChangeEvent } from 'react';

interface Props {
  name: string;
  options: string[];
  onChange: (value: string) => void;
}

const Select = ({ name, options, onChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select name={name} onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
