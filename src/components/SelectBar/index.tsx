import React from "react";
import { ALIGN_FILTER, CATEGORY_FILTER } from "../../constants/restaurants";
import { AlignFilter, CategoryFilter } from "../../types/restaurants";
import Select from "../Select";
import St from "./styled";

interface SelectBarProps {
  onChangeCategoryFilter(category: CategoryFilter): void;
  onChangeAlignFilter(align: AlignFilter): void;
}
export default function SelectBar({
  onChangeCategoryFilter,
  onChangeAlignFilter,
}: SelectBarProps) {
  return (
    <St.Layout>
      <Select options={CATEGORY_FILTER} onChange={onChangeCategoryFilter} />
      <Select options={ALIGN_FILTER} onChange={onChangeAlignFilter} />
    </St.Layout>
  );
}
