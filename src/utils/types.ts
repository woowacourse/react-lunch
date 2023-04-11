export const RESTAURANT_CATEGORY = ['한식', '양식', '일식', '아시안', '중식', '기타'] as const;
export const WHOLE_CATEGORY = '전체' as const;
export const FILTERS = ['이름순', '거리순'] as const;

export type restaurantCategory = typeof RESTAURANT_CATEGORY[number];

export type selectorCategory = typeof WHOLE_CATEGORY | restaurantCategory;

export type selectorFilter = typeof FILTERS[number];

export type takingTime = 5 | 10 | 15 | 20 | 30;
