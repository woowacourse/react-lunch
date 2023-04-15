import styled from 'styled-components';

type SelectBoxProps = {
  options: string[];
  setOption: (option: string) => void;
};

const SelectBox = ({ options, setOption }: SelectBoxProps) => {
  return (
    <Select onChange={(e) => setOption(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

const Select = styled.select`
  height: 44px;
  min-width: 125px;
  padding: 8px;
  border: 1px solid var(--grey-200);
  border-radius: 8px;
  background: transparent;
  font-size: 16px;
`;

export default SelectBox;
