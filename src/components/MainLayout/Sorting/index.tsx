import { SELECT_OPTION } from '../../../CONSTANT';
import Select from '../../common/Select';

interface Props {
  onChangeSorting: (sortBy: string) => void;
}

export default function Sorting(props: Props) {
  return (
    <Select
      name="sorting"
      onChange={props.onChangeSorting}
      options={SELECT_OPTION.SORT_BY}
    />
  );
}
