export type Category = '한식' | '중식' | '일식' | '양식' | '아시안' | '기타';

export interface Restaurant {
  id: number;
  title: string;
  category: Category;
  detail: string;
  distance: number;
  link: string;
}

export type CategoryFilter = '전체' | Category;
export type AlignFilter = '이름순' | '거리순';
