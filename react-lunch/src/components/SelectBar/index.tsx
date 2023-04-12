import React, { Component, ReactNode } from 'react';
import { alignFilter, categoryFilter } from '../../constants/restaurants';
import { AlignFilter, CategoryFilter } from '../../types/restaurants';
import Select from '../Select';
import St from './styled';

interface SelectBarProps {
  onChangeCategoryFilter(category: CategoryFilter): void;
  onChangeAlignFilter(align: AlignFilter): void;
}
class SelectBar extends Component<SelectBarProps> {
  render(): ReactNode {
    const { onChangeCategoryFilter, onChangeAlignFilter } = this.props;
    return (
      <St.Layout>
        <Select options={categoryFilter} onChange={onChangeCategoryFilter} />
        <Select options={alignFilter} onChange={onChangeAlignFilter} />
      </St.Layout>
    );
  }
}

export default SelectBar;
