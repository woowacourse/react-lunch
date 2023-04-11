type Category = '한식' | '양식' | '중식' | '일식' | '아시안' | '기타';

export interface Restaurant {
  id: number;
  category: Category;
  name: string;
  distance: number;
  description: string;
}

export interface RestaurantDataServiceType {
  restaurants: Restaurant[];
  setInitialRestaurants(): void;
  getRestaurants(): Restaurant[];
}
