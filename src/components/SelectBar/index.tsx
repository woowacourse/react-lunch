import React, { Component, ReactNode } from "react";
import { ALIGN_FILTER, CATEGORY_FILTER } from "../../constants/restaurants";
import { AlignFilter, CategoryFilter } from "../../types/restaurants";
import Select from "../Select";
import St from "./styled";

interface SelectBarProps {
  onChangeCategoryFilter(category: CategoryFilter): void;
  onChangeAlignFilter(align: AlignFilter): void;
}
class SelectBar extends Component<SelectBarProps> {
  render(): ReactNode {
    const { onChangeCategoryFilter, onChangeAlignFilter } = this.props;
    return (
      <St.Layout>
        <Select options={CATEGORY_FILTER} onChange={onChangeCategoryFilter} />
        <Select options={ALIGN_FILTER} onChange={onChangeAlignFilter} />
      </St.Layout>
    );
  }
}

export default SelectBar;
