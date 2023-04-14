export type All = '전체';
export type Category = '한식' | '양식' | '중식' | '일식' | '아시안' | '기타';
export type Criterion = '이름순' | '거리순';

export interface Restaurant {
  id: number;
  category: Category;
  name: string;
  distance: number;
  description: string;
  link: string;
}
