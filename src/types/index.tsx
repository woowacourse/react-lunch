import { CATEGORY_NAME } from '../constants';

export interface RestaurantItemType {
  category: CategoryType;
  name: string;
  distance: number;
  description: string;
  link: string;
}

export type CategoryType = (typeof CATEGORY_NAME)[keyof typeof CATEGORY_NAME];

export enum SelectKind {
  category = '카테고리',
  order = '정렬',
}
