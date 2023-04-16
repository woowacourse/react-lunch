import { Category } from '../types';
import { RESTAURANT_CATEGORY } from '../constants';

export const validateCategory = (category: Category) => {
  if (RESTAURANT_CATEGORY.includes(category)) {
    return category;
  }

  throw new Error(`유효하지 않는 카테고리: ${category}`);
};
