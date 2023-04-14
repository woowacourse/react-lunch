import React from 'react';
import SelectBox from './SelectBox';
import { CATEGORY } from '../../constants';
import { Category, All } from '../../types';

interface CategoryProps {
  setCategory: (newCategory: Category | All) => void;
}

class CategoryFilter extends React.Component<CategoryProps> {
  constructor(props: CategoryProps) {
    super(props);
    this.onChangeCategory = this.onChangeCategory.bind(this);
  }

  onChangeCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    this.props.setCategory(event.target.value as Category | All);
  }

  render() {
    return <SelectBox filter={CATEGORY} onOptionChange={this.onChangeCategory} />;
  }
}

export default CategoryFilter;
