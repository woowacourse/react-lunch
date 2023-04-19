import Filter from '../../common/Filter';
import { RestaurantSortOption } from '../../../helpers/RestaurantHelper';

type SortFilterProps = {
  onChange: (sortOption: RestaurantSortOption) => void;
};

const options = [
  { value: 'name', text: '이름순' },
  { value: 'distance', text: '거리순' },
];

export default function SortFilter({ onChange }: SortFilterProps) {
  const onChangeSortOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as RestaurantSortOption;

    onChange(value);
  };

  return <Filter id="sorting-filter" name="sorting" options={options} onChange={onChangeSortOption} />;
}
