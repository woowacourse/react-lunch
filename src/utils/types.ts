export const RESTAURANT_CATEGORY = ['한식', '양식', '일식', '아시안', '중식', '기타'] as const;
export const WHOLE_CATEGORY = '전체' as const;
export const FILTERS = ['이름순', '거리순'] as const;

export type RestaurantCategory = typeof RESTAURANT_CATEGORY[number];

export type SelectorCategory = typeof WHOLE_CATEGORY | RestaurantCategory;

export type SelectorFilter = typeof FILTERS[number];

export type TakingTime = 5 | 10 | 15 | 20 | 30;
