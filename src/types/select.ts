export interface SelectPropsType {
  name: SelectNameType;
  options: string[];
  handleSelect: HandleSelect;
}

export type HandleSelect = (select: SelectedValue) => void;

export type SelectNameType = "category" | "sorting";

export type SortingUnion = "이름순" | "거리순";
export type CategoryUnion =
  | "전체"
  | "일식"
  | "양식"
  | "한식"
  | "아시안"
  | "중식"
  | "기타";

export interface SelectedValue {
  type: SelectNameType;
  value: SortingUnion | CategoryUnion;
}

export interface SelectStateType {
  sorting: SortingUnion;
  category: CategoryUnion;
}
