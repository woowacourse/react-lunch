import { Category } from '../types/restaurant';

export const CATEGORIES = ['한식', '중식', '일식', '양식', '아시안', '기타'] as const;
export const DISTANCES = [5, 10, 15, 20, 30] as const;
export const SORTING_TYPES = ['이름순', '거리순'] as const;

export const CATEGORY_IMAGE_MAP: Record<Category, string> = {
  한식: 'category-korean.png',
  일식: 'category-japanese.png',
  중식: 'category-chinese.png',
  양식: 'category-western.png',
  아시안: 'category-asian.png',
  기타: 'category-etc.png'
};
