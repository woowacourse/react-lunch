const foodCategory = ['전체', '일식', '한식', '중식', '아시안', '양식', '기타'] as const;

const sortMethod = ['이름순', '거리순'] as const;

export type FoodCategory = (typeof foodCategory)[number];

export type SortMethod = (typeof sortMethod)[number];

export const isFoodCategory = (category: string): category is FoodCategory => {
  return foodCategory.includes(category as FoodCategory);
};

export const isSortMethod = (sortMethod: string): sortMethod is SortMethod => {
  return sortMethod.includes(sortMethod as SortMethod);
};

export interface RestaurantInfo {
  title: string;
  estimatedTime: number;
  description?: string;
  category: FoodCategory;
  link?: string;
}
