import {
  categoryAsian,
  categoryChinese,
  categoryEtc,
  categoryJapanese,
  categoryKorean,
  categoryWestern,
} from '../assets';

export const CATEGORY_IMG: Record<string, string> = {
  한식: categoryKorean,
  중식: categoryChinese,
  일식: categoryJapanese,
  아시안: categoryAsian,
  양식: categoryWestern,
  기타: categoryEtc,
} as const;

export const LOCAL_STORAGE_RESTAURANTS_KEY = 'restaurants';
