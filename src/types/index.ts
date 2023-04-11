export type Category = '중식' | '한식' | '일식' | '아시안식' | '양식' | '기타';

export interface Restaurant {
  category: Category;
  name: string;
  distance: number;
  description?: string;
  link?: string;
  id: number;
}

interface CurrentDisplayStatus {
  category: string;
  sortBy: string;
}

export interface State {
  restaurantList: Restaurant[];
  selectedRestaurant: number;
  currentDisplayStatus: CurrentDisplayStatus;
}
