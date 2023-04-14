import { Component } from 'react';

import Select from '../../common/Select';

const CATEGORIES = ['전체', '한식', '중식', '일식', '양식', '아시안', '기타'];

interface Props {
  onChangeCategory: (category: string) => void;
}

class CategoryFilter extends Component<Props> {
  render() {
    return (
      <Select
        name="category"
        onChange={this.props.onChangeCategory}
        options={CATEGORIES}
      />
    );
  }
}

export default CategoryFilter;
