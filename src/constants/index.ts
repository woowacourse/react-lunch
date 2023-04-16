export const CATEGORIES = {
  ALL: '전체',
  KOREAN: '한식',
  CHINESE: '중식',
  JAPANESE: '일식',
  WESTERN: '양식',
  ASIAN: '아시안',
  ETC: '기타',
} as const;

export const SORT_OPTIONS = {
  NAME: '이름순',
  DISTANCE: '거리순',
} as const;

export const LOCAL_STORAGE_KEY = {
  RESTAURANT: 'restaurant',
} as const;

export const DEFAULT_CATEGORY_OPTION = '전체';

export const DEFAULT_SORT_OPTION = '이름순';
