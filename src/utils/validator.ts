import { Category } from '../types';
import { RESTAURANT_CATEGORY } from '../constants';

const validateCategory = (category: string): Category => {
  if (RESTAURANT_CATEGORY.includes(category as Category)) {
    return category as Category;
  }

  throw new Error(`유효하지 않는 카테고리: ${category}`);
};

export { validateCategory };
