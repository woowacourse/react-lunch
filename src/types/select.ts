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
