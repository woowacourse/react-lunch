import { ChangeEvent, Component } from 'react';

interface Props {
  name: string;
  options: string[];
  onChange: (value: string) => void;
}

const handleChange = (
  callback: (value: string) => void,
  event: ChangeEvent<HTMLSelectElement>,
) => {
  callback(event.target.value);
};

export default function Select(props: Props) {
  return (
    <select name={props.name} onChange={(e) => handleChange(props.onChange, e)}>
      {props.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
