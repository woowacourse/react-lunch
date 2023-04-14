import categoryKorean from './category-korean.png';
import categoryChinese from './category-chinese.png';
import categoryJapanese from './category-japanese.png';
import categoryWestern from './category-western.png';
import categoryAsian from './category-asian.png';
import categoryEtc from './category-etc.png';

interface CategoryImages {
  [key: string]: string;
}

export const CATEGORY_IMAGES: CategoryImages = {
  한식: categoryKorean,
  중식: categoryChinese,
  일식: categoryJapanese,
  양식: categoryWestern,
  아시안: categoryAsian,
  기타: categoryEtc,
};
