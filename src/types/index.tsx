export interface SelectBoxType {
  selectType: SelectType;
  options: string[];
}

export enum SelectType {
  category = '카테고리',
  order = '정렬',
}
