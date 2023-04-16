export interface RestaurantInfo {
  title: string;
  estimatedTime: number;
  description?: string;
  category: FoodCategory;
  link?: string;
}

export type FoodCategory = '전체' | '일식' | '한식' | '중식' | '아시안' | '양식' | '기타';

export type SortMethod = '이름순' | '거리순';
