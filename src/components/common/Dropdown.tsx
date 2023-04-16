import * as styled from './Dropdown.styles';

export type DropdownOption<Value> = {
  label: string;
  value: Value;
}

export type DropdownProps<Value> = {
  options: DropdownOption<Value>[];
  selectedOption: DropdownOption<Value>;
  onChange: (value: DropdownOption<Value>) => void;
};

const Dropdown = <Value,>({ options, selectedOption, onChange }: DropdownProps<Value>) => {
  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const option = options.find((_option) => _option.label === event.target.value)!;
    onChange(option);
  };

  return (
    <styled.Dropdown
      value={selectedOption.label}
      onChange={handleSelectChange}
      data-cy="dropdown-filter"
    >
      {options.map(({ label }) => (
        <option key={label}>
          {label}
        </option>
      ))}
    </styled.Dropdown>
  );
}

export default Dropdown;
