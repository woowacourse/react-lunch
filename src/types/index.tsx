import { ORDER_KEY, CATEGORY_NAME } from '../constants';

export interface RestaurantItemType {
  category: CategoryType;
  name: string;
  distance: number;
  description: string;
  link: string;
}

export interface RestaurantListStateType {
  restaurants: RestaurantItemType[];
  filteredRestaurants: RestaurantItemType[];
  category: CategoryType;
  order: OrderType;
}

export type CategoryType = (typeof CATEGORY_NAME)[keyof typeof CATEGORY_NAME];

export type OrderType = (typeof ORDER_KEY)[keyof typeof ORDER_KEY];

export enum SelectKind {
  category = '카테고리',
  order = '정렬',
}
