import categoryKoreanImage from "./category-korean.png";
import categoryAsianImage from "./category-asian.png";
import categoryChineseImage from "./category-chinese.png";
import categoryJapaneseImage from "./category-japanese.png";
import categoryWesternImage from "./category-western.png";
import categoryEtcImage from "./category-etc.png";
import type { Category } from "../../../constants/options";

const categoryImages: Readonly<Record<Category, string>> = {
  한식: categoryKoreanImage,
  중식: categoryChineseImage,
  일식: categoryJapaneseImage,
  아시안: categoryAsianImage,
  양식: categoryWesternImage,
  기타: categoryEtcImage,
};

export default categoryImages

