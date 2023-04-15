import { Component } from 'react';
import Filter from '../../common/Filter';
import { RestaurantSortOption } from '../../../RestaurantUtils';

type SortFilterProps = {
  onChange: (sortOption: RestaurantSortOption) => void;
};

const options = [
  { value: 'name', text: '이름순' },
  { value: 'distance', text: '거리순' },
];

export default class SortFilter extends Component<SortFilterProps> {
  render() {
    return (
      <Filter
        id="sorting-filter"
        name="sorting"
        options={options}
        onChange={this.onChangeSortOption}
      />
    );
  }

  onChangeSortOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as RestaurantSortOption;

    this.props.onChange(value);
  };
}
