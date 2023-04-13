import { CategoryOption, Option, SortOption } from './type';

export const imgSrc = {
  한식: 'korean',
  중식: 'chinese',
  일식: 'japanese',
  양식: 'western',
  아시안: 'asian',
  기타: 'etc',
};

export const categoryOption: Option<CategoryOption>[] = [
  {
    value: '전체',
    text: '전체',
  },
  {
    value: '한식',
    text: '한식',
  },
  {
    value: '중식',
    text: '중식',
  },
  {
    value: '일식',
    text: '일식',
  },
  {
    value: '양식',
    text: '양식',
  },
  {
    value: '아시안',
    text: '아시안',
  },
  {
    value: '기타',
    text: '기타',
  },
];

export const sortOption: Option<SortOption>[] = [
  { value: 'name', text: '이름순' },
  { value: 'distance', text: '거리순' },
];
