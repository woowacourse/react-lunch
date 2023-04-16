export const DOMAIN = 'http://localhost:3000/react-lunch' as const;

export const LOCAL_STORAGE_KEY = 'restaurantList' as const;

export const DEFAULT_OPTIONS = {
  CATEGORY: '전체',
  SORT_BY: '이름순',
} as const;

export const RESTAURANT_CATEGORY = ['중식', '한식', '일식', '아시안식', '양식', '기타'] as const;
export const SORT_BY = ['이름순', '거리순'] as const;

export const RESTAURANT_CATEGORY_OPTION = [DEFAULT_OPTIONS.CATEGORY, ...RESTAURANT_CATEGORY] as const;

export const RESTAURANT_LI_ELEMENT = '.restaurant[data-id]' as const;

export const SELECT_ATTRIBUTES = {
  CATEGORY_FILTER: {
    id: 'category-filter',
    name: 'category',
    className: 'restaurant-filter',
  },
  SORT_BY_FILTER: {
    id: 'sortBy-filter',
    name: 'sortBy',
    className: 'restaurant-filter',
  },
} as const;
