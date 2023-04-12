const RESTAURANT_CATEGORY = ['중식', '한식', '일식', '아시안식', '양식', '기타'] as const;
const SORT_BY = ['이름순', '거리순'] as const;

const RESTAURANT_CATEGORY_OPTION = ['전체', ...RESTAURANT_CATEGORY];

const LOCAL_STORAGE_KEY = 'restaurantList';

export { RESTAURANT_CATEGORY, SORT_BY, RESTAURANT_CATEGORY_OPTION, LOCAL_STORAGE_KEY };
