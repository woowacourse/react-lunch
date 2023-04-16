import { Category } from 'types';

export const imgSrc: Record<Category, string> = {
  한식: `${process.env.PUBLIC_URL}/assets/category-korean.png`,
  중식: `${process.env.PUBLIC_URL}/assets/category-chinese.png`,
  일식: `${process.env.PUBLIC_URL}/assets/category-japanese.png`,
  양식: `${process.env.PUBLIC_URL}/assets/category-western.png`,
  아시안: `${process.env.PUBLIC_URL}/assets/category-asian.png`,
  기타: `${process.env.PUBLIC_URL}/assets/category-etc.png`,
};

export const CategoryFilters = {
  all: '전체',
  korean: '한식',
  chinese: '중식',
  japanese: '일식',
  western: '양식',
  asian: '아시안',
  etc: '기타',
} as const;

export const SortFilters = {
  name: '이름순',
  distance: '거리순',
} as const;
