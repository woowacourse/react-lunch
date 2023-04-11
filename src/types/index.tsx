export interface SelectBoxType {
  selectType: SelectKind;
  options: string[];
}

export enum SelectKind {
  category = '카테고리',
  order = '정렬',
}

export interface RestaurantItemType {
  category: CategoryKind;
  name: string;
  distance: number;
  description: string;
  link: string;
}

export enum CategoryKind {
  korean = '한식',
  japanese = '일식',
  chinese = '중식',
  western = '양식',
  asian = '아시안',
  etc = '기타',
}
