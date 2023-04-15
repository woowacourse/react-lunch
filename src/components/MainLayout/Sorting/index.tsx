import Select from '../../common/Select';

const SORT_BY = ['이름순', '거리순'];

interface Props {
  onChangeSorting: (sortBy: string) => void;
}
const Sorting = ({ onChangeSorting }: Props) => {
  return <Select name="sorting" onChange={onChangeSorting} options={SORT_BY} />;
};

export default Sorting;
