import styled from 'styled-components';

type Props = {
  options: string[];
  onOptionChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export function SelectBox({ options, onOptionChange }: Props) {
  return (
    <Select onChange={onOptionChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  height: 44px;
  min-width: 125px;

  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
  padding: 8px;
`;
