import 기타 from '../assets/categories/기타.png';
import 아시안 from '../assets/categories/아시안.png';
import 양식 from '../assets/categories/양식.png';
import 일식 from '../assets/categories/일식.png';
import 중식 from '../assets/categories/중식.png';
import 한식 from '../assets/categories/한식.png';

export const CATEGORIES = ['한식', '일식', '중식', '양식', '아시안', '기타'] as const;

export type Category = (typeof CATEGORIES)[number];

export const DISTANCES_BY_MINUTES = [5, 10, 15, 20, 30] as const;

export type DistancesByMinutes = (typeof DISTANCES_BY_MINUTES)[number];

export const CATEGORY_ICONS: Record<Category, string> = {
  한식,
  중식,
  일식,
  양식,
  아시안,
  기타,
} as const;
