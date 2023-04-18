import { Category, SelectOption, Sorting } from './type';

import asianImg from '../asset/category-asian.png';
import chineseImg from '../asset/category-chinese.png';
import etcImg from '../asset/category-etc.png';
import japaneseImg from '../asset/category-japanese.png';
import koreanImg from '../asset/category-korean.png';
import westernImg from '../asset/category-western.png';

export const CATEGORY_OPTIONS: SelectOption<Category>[] = [
  {
    value: '전체',
    label: '전체',
  },
  {
    value: '한식',
    label: '한식',
  },
  {
    value: '중식',
    label: '중식',
  },
  {
    value: '일식',
    label: '일식',
  },
  {
    value: '양식',
    label: '양식',
  },
  {
    value: '아시안',
    label: '아시안',
  },
  {
    value: '기타',
    label: '기타',
  },
];

export const SORTING_OPTIONS: SelectOption<Sorting>[] = [
  {
    value: 'name',
    label: '이름순',
  },
  {
    value: 'estimateTime',
    label: '거리순',
  },
];

export const NO_SELECT_ID = -1;

export const DEFAULT_CATEGORY = '전체';

export const DEFAULT_SORTING = 'name';

export const CATEGORY_IMAGES = {
  한식: koreanImg,
  중식: chineseImg,
  일식: japaneseImg,
  양식: westernImg,
  아시안: asianImg,
  기타: etcImg,
};

export const NO_EXIST_RESTAURANT = {
  title: '오류가 발생했습니다.',
  category: '',
  estimateTime: 5,
  description: '존재하지 않는 음식점입니다.',
  link: '',
};
