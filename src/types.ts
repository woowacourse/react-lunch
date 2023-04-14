export type Category = '한식' | '중식' | '일식' | '아시안' | '양식' | '기타';
export type Distance = 5 | 10 | 15 | 20 | 30;

export interface Restaurant {
  id: number;
  category: Category;
  name: string;
  distance: Distance;
  description?: string;
  link?: string;
}

export type CategoryOption = '전체' | Category;
export type SortOption = '이름순' | '거리순';
