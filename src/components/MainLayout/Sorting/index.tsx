import { Component } from 'react';

import Select from '../../common/Select';

const SORT_BY = ['이름순', '거리순'];

interface Props {
  onChangeSorting: (sortBy: string) => void;
}
class Sorting extends Component<Props> {
  render() {
    return (
      <Select
        name="sorting"
        onChange={this.props.onChangeSorting}
        options={SORT_BY}
      />
    );
  }
}

export default Sorting;
