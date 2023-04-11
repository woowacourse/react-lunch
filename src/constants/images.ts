import asianCategory from '../assets/category-asian.png';
import koreanCategory from '../assets/category-korean.png';
import chineseCategory from '../assets/category-chinese.png';
import japaneseCategory from '../assets/category-japanese.png';
import westernCategory from '../assets/category-western.png';
import etcCategory from '../assets/category-etc.png';
import { Category } from '../types';

export const RESTAURANT_IMAGE: Record<Category, string> = {
  중식: chineseCategory,
  한식: koreanCategory,
  일식: japaneseCategory,
  양식: westernCategory,
  아시안식: asianCategory,
  기타: etcCategory,
};
