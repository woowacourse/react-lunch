import {
  categoryAsian,
  categoryChinese,
  categoryEtc,
  categoryJapanese,
  categoryKorean,
  categoryWestern,
} from '../assets';

export const CATEGORY_OPTIONS = ['전체', '한식', '일식', '중식', '양식', '아시안', '기타'];
export const ORDER_OPTIONS = ['이름순', '거리순'];

export const CATEGORY_IMG = {
  한식: categoryKorean,
  중식: categoryChinese,
  일식: categoryJapanese,
  아시안: categoryAsian,
  양식: categoryWestern,
  기타: categoryEtc,
} as const;
