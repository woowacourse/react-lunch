import { Category } from '../types';
import chineseCategory from '../assets/category-chinese.png';
import koreanCategory from '../assets/category-korean.png';
import japaneseCategory from '../assets/category-japanese.png';
import asianCategory from '../assets/category-asian.png';
import westernCategory from '../assets/category-western.png';
import etcCategory from '../assets/category-etc.png';

export const RESTAURANT_IMAGE: Record<Category, string> = {
  중식: chineseCategory,
  한식: koreanCategory,
  일식: japaneseCategory,
  양식: westernCategory,
  아시안식: asianCategory,
  기타: etcCategory,
} as const;
