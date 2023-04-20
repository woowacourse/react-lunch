import { ChangeEvent } from 'react';

type SelectProps = {
  name: string;
  id: string;
  className: string;
  options: readonly string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

function Select({ name, id, className, options, onChange }: SelectProps) {
  return (
    <select name={name} id={id} className={className} onChange={onChange}>
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
