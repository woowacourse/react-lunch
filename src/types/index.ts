export type Category = '전체' | '한식' | '양식' | '중식' | '일식' | '아시안' | '기타';
export type Criterion = '이름순' | '거리순';

export interface Restaurant {
  id: number;
  category: Category;
  name: string;
  distance: number;
  description: string;
  link: string;
}
