export interface RestaurantDetail {
  id: number;
  category: Category;
  name: string;
  distance: number;
  description: string;
  link?: string;
}

export type Category =
  | '전체'
  | '한식'
  | '중식'
  | '일식'
  | '양식'
  | '아시안'
  | '기타';
