import {
  categoryAsian,
  categoryChinese,
  categoryEtc,
  categoryJapanese,
  categoryKorean,
  categoryWestern,
} from '../assets';

export const CATEGORY_IMG: { [key: string]: string } = {
  한식: categoryKorean,
  중식: categoryChinese,
  일식: categoryJapanese,
  아시안: categoryAsian,
  양식: categoryWestern,
  기타: categoryEtc,
} as const;

export const CATEGORY_NAME: { [key: string]: string } = {
  all: '전체',
  korean: '한식',
  chinese: '중식',
  japanese: '일식',
  asian: '아시안',
  western: '양식',
  etc: '기타',
} as const;

export const ORDER_KEY: { [key: string]: string } = {
  name: '이름순',
  distance: '거리순',
} as const;
