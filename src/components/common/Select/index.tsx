interface Props {
  name: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function Select(props: Props) {
  return (
    <select name={props.name} onChange={(e) => props.onChange(e.target.value)}>
      {props.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
