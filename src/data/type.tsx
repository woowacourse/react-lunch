export type Category =
  | '전체'
  | '한식'
  | '중식'
  | '양식'
  | '일식'
  | '아시안'
  | '기타';

export type Sort = '이름순' | '거리순';

export interface RestaurantInfo {
  id: number;
  category: string;
  name: string;
  distance: number;
  description?: string;
  link?: string;
}
