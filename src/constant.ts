import { Category, SelectOption, Sort } from "./type";

import asianImg from './asset/category-asian.png';
import chineseImg from './asset/category-chinese.png';
import etcImg from './asset/category-etc.png';
import japaneseImg from './asset/category-japanese.png';
import koreanImg from './asset/category-korean.png';
import westernImg from './asset/category-western.png';

export const CATEGORY_OPTIONS:SelectOption<Category>[] = [
  {
    value: '전체',
    textContent: '전체',
  },
  {
    value: '한식',
    textContent: '한식',
  },
  {
    value: '중식',
    textContent: '중식',
  },
  {
    value: '양식',
    textContent: '양식',
  },
  {
    value: '아시안',
    textContent: '아시안',
  },
  {
    value: '기타',
    textContent: '기타',
  },
];

export const SORTING_OPTIONS:SelectOption<Sort>[] = [
  {
    value: 'name',
    textContent: '이름순',
  },
  {
    value: 'distance',
    textContent: '거리순',
  },
];

export const NO_SELECT_ID = -1;

export const DEFAULT_CATEGORY = '전체';

export const DEFAULT_SORTING = 'name';

export const CATEGORY_IMAGES = {
  '한식': asianImg,
  '중식': chineseImg,
  '양식': westernImg,
  '아시안': asianImg,
  '기타': etcImg
};