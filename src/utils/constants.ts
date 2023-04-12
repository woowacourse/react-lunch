import { FILTERS, RESTAURANT_CATEGORY, WHOLE_CATEGORY, restaurantCategory } from './types';
import korea from '../assets/category-korean.png';
import japanese from '../assets/category-japanese.png';
import western from '../assets/category-western.png';
import chinese from '../assets/category-chinese.png';
import asian from '../assets/category-asian.png';
import etc from '../assets/category-etc.png';

export const CATEGORY_IMAGE_PATH: Record<restaurantCategory, string> = {
  한식: korea,
  일식: japanese,
  양식: western,
  중식: chinese,
  아시안: asian,
  기타: etc,
} as const;

export const CATEGORY_OPTIONS = [WHOLE_CATEGORY, ...Object.values(RESTAURANT_CATEGORY)];

export const FILTER_OPTIONS = [...Object.values(FILTERS)];
