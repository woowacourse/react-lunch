import St from './styled';
interface SelectProps {
  options: readonly string[];
  onChange(value: string): void;
}

export default function Select(props: SelectProps) {
  const { options, onChange: onChangeSelect, ...restProps } = props;

  return (
    <St.Layout onChange={(e) => onChangeSelect(e.target.value)} {...restProps}>
      {options.map((option) => (
        <St.Option value={option} key={option}>
          {option}
        </St.Option>
      ))}
    </St.Layout>
  );
}
