import { Component } from 'react';
import Filter from '../../common/Filter';

const options = [
  { value: 'name', text: '이름순' },
  { value: 'distance', text: '거리순' },
];

export default class SortFilter extends Component {
  render() {
    return <Filter id="sorting-filter" name="sorting" options={options} onChange={() => {}} />;
  }
}
