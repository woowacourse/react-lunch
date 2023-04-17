import { useSelect } from '../../hooks/select';
import { Options } from '../../types';

const Select = ({
  attributes,
  options,
  onChange,
}: {
  attributes: {
    id: string;
    name: string;
    className: string;
  };
  options: Options;
  onChange: CallableFunction;
}) => {
  const { handleChangeOption, createOptionElements } = useSelect(attributes, options, onChange);

  return (
    <label htmlFor={attributes.id}>
      <select name={attributes.name} id={attributes.id} className={attributes.className} onChange={handleChangeOption}>
        {createOptionElements()}
      </select>
    </label>
  );
};

export default Select;
