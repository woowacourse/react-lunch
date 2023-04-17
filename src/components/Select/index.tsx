import Styled from './styled';
interface SelectProps {
  options: readonly string[];
  onChange(value: string): void;
}

export default function Select(props: SelectProps) {
  const { options, onChange: onChangeSelect, ...restProps } = props;

  return (
    <Styled.Layout
      onChange={(e) => onChangeSelect(e.target.value)}
      {...restProps}>
      {options.map((option) => (
        <Styled.Option value={option} key={option}>
          {option}
        </Styled.Option>
      ))}
    </Styled.Layout>
  );
}
