import Select from '../../common/Select';

import { SORT_BY } from '../../../domain/constants';

interface Props {
  onChangeSorting: (sortBy: string) => void;
}
const Sorting = ({ onChangeSorting }: Props) => {
  return <Select name="sorting" onChange={onChangeSorting} options={SORT_BY} />;
};

export default Sorting;
