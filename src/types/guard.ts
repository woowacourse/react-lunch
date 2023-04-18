import { Category, Criterion } from '.';
import { CATEGORY, CRITERION } from '../constants';

export function isCategoryType(input: string): input is Category {
  const categories = Object.values(CATEGORY);

  if (categories.includes(input)) return true;

  return false;
}

export function isCriterionType(input: string): input is Criterion {
  const criterions = Object.values(CRITERION);

  if (criterions.includes(input)) return true;

  return false;
}
