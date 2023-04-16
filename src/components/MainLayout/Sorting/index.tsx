import Select from '../../common/Select';

const SORT_BY = ['이름순', '거리순'];

interface Props {
  onChangeSorting: (sortBy: string) => void;
}
export default function Sorting(props: Props) {
  return (
    <Select name="sorting" onChange={props.onChangeSorting} options={SORT_BY} />
  );
}
