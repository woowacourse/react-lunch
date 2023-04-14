const LOCAL_STORAGE_KEY = 'restaurantList';

const DEFAULT_CATEGORY = '전체';
const DEFAULT_SORT_BY = '이름순';

const RESTAURANT_CATEGORY = ['중식', '한식', '일식', '아시안식', '양식', '기타'] as const;
const SORT_BY = ['이름순', '거리순'] as const;

const RESTAURANT_CATEGORY_OPTION = [DEFAULT_CATEGORY, ...RESTAURANT_CATEGORY];

const SELECT_ATTRIBUTES = {
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

export {
  DEFAULT_CATEGORY,
  DEFAULT_SORT_BY,
  RESTAURANT_CATEGORY,
  SORT_BY,
  RESTAURANT_CATEGORY_OPTION,
  LOCAL_STORAGE_KEY,
  SELECT_ATTRIBUTES,
};
