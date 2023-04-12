import { ORDER_KEY, CATEGORY_NAME } from '../constants';

export interface SelectBoxType {
  selectType: SelectKind;
  options: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export interface RestaurantItemType {
  category: CategoryType;
  name: string;
  distance: number;
  description: string;
  link: string;
}

export interface RestaurantListStateType {
  restaurants: RestaurantItemType[];
  category: CategoryType;
  order: OrderType;
}

export interface BottomSheetType {
  children: React.ReactNode;
  onClose: () => void;
}

export type CategoryType = (typeof CATEGORY_NAME)[keyof typeof CATEGORY_NAME];

export type OrderType = (typeof ORDER_KEY)[keyof typeof ORDER_KEY];

export enum SelectKind {
  category = '카테고리',
  order = '정렬',
}
