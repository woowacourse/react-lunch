// import { ORDER_KEY, CATEGORY_NAME } from '../constants';

export interface SelectBoxType {
  selectType: SelectKind;
  options: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
}

export interface RestaurantItemType {
  category: CategoryKind;
  name: string;
  distance: number;
  description: string;
  link: string;
}

export interface BottomSheetType {
  children: React.ReactNode;
  onClose: () => void;
}

export enum SelectKind {
  category = '카테고리',
  order = '정렬',
}

export enum CategoryKind {
  all = '전체',
  korean = '한식',
  chinese = '중식',
  japanese = '일식',
  asian = '아시안',
  western = '양식',
  etc = '기타',
}

export enum OrderKind {
  name = '이름순',
  distance = '거리순',
}
