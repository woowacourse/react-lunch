import { SELECT_OPTION } from '../../../CONSTANT';
import Select from '../../common/Select';

interface Props {
  onChangeCategory: (category: string) => void;
}

export default function CategoryFilter(props: Props) {
  return (
    <Select
      name="category"
      onChange={props.onChangeCategory}
      options={SELECT_OPTION.CATEGORIES}
    />
  );
}
