export type RestaurantCategory = '한식' | '중식' | '일식' | '아시안' | '양식' | '기타';
export type RequiredMinuteFromCampus = '5' | '10' | '15' | '20' | '30';

export type Restaurant = {
  id: number;
  category: RestaurantCategory;
  name: string;
  distance: RequiredMinuteFromCampus;
  description: string;
  link: string;
};
