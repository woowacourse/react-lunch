import { Component } from 'react';
import Filter from '../../common/Filter';
import { RestaurantCategoryFilterOption } from '../../../helpers/RestaurantHelper';

type CategoryFilterProps = {
  onChange: (category: RestaurantCategoryFilterOption) => void;
};

const options = [
  { value: '전체', text: '전체' },
  { value: '한식', text: '한식' },
  { value: '중식', text: '중식' },
  { value: '일식', text: '일식' },
  { value: '아시안', text: '아시안' },
  { value: '양식', text: '양식' },
  { value: '기타', text: '기타' },
];

export default class CategoryFilter extends Component<CategoryFilterProps> {
  render() {
    return (
      <Filter
        id="category-filter"
        name="category"
        options={options}
        onChange={this.onChangeCategory}
      />
    );
  }

  onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as RestaurantCategoryFilterOption;

    this.props.onChange(value);
  };
}
