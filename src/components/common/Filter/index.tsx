import './Filter.css';

type Option = {
  value: string;
  text: string;
};

type FilterProps = {
  id: string;
  name: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Filter({ id, name, options, onChange }: FilterProps) {
  return (
    <select name={name} id={id} className="filter" onChange={onChange}>
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
