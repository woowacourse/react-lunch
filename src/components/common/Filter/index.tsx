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

const Filter = ({ name, id, options, onChange }: FilterProps) => {
  return (
    <select name={name} id={id} className="filter" onChange={onChange}>
      {options.map((option) => (
        <option key={name} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Filter;
