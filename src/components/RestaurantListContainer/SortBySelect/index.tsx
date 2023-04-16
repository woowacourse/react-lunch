import Select from '../../common/Select';

import { SORT_BY } from '../../../domain/constants';

interface Props {
  onChangeSortBy: (sortBy: string) => void;
}
const SortBySelect = ({ onChangeSortBy }: Props) => {
  return <Select name="sortBy" onChange={onChangeSortBy} options={SORT_BY} />;
};

export default SortBySelect;
