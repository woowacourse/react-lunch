import { FOOD_CATEGORY, SORT_METHOD } from '../constants';

export interface RestaurantInfo {
  title: string;
  estimatedTime: number;
  description?: string;
  category: FoodCategory;
  link?: string;
}

export type FoodCategory = '전체' | '일식' | '한식' | '중식' | '아시안' | '양식' | '기타';

export type SortMethod = '이름순' | '거리순';

export const isFoodCategory = (category: string): category is FoodCategory => {
  return FOOD_CATEGORY.includes(category);
};

export const isSortMethod = (method: string): method is SortMethod => {
  return SORT_METHOD.includes(method);
};
