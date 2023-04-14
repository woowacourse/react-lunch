import koreanImg from '../image/category-korean.png';
import chineseImg from '../image/category-chinese.png';
import japaneseImg from '../image/category-japanese.png';
import westernImg from '../image/category-western.png';
import asianImg from '../image/category-asian.png';
import etcImg from '../image/category-etc.png';

export const CATEGORY_TO_FILENAME: Record<string, string> = Object.freeze({
  한식: koreanImg,
  중식: chineseImg,
  일식: japaneseImg,
  양식: westernImg,
  아시안: asianImg,
  기타: etcImg,
});
