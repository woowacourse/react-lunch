import { RestaurantCategory } from '../types';

type CategoryIconFileName = {
  [key in RestaurantCategory]: string;
};

export const categoryIconFileName: CategoryIconFileName = {
  한식: `${process.env.PUBLIC_URL}/assets/category-korean.png`,
  중식: `${process.env.PUBLIC_URL}/assets/category-chinese.png`,
  일식: `${process.env.PUBLIC_URL}/assets/category-japanese.png`,
  아시안: `${process.env.PUBLIC_URL}/assets/category-asian.png`,
  양식: `${process.env.PUBLIC_URL}/assets/category-western.png`,
  기타: `${process.env.PUBLIC_URL}/assets/category-etc.png`,
};
