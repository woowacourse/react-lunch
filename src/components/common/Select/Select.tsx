import { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: readonly string[];
}

function Select({ options, style, ...attributes }: SelectProps) {
  return (
    <label htmlFor={attributes.id}>
      <select {...attributes}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
