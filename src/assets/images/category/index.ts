import categoryKoreanImage from "./category-korean.png";
import categoryAsianImage from "./category-asian.png";
import categoryChineseImage from "./category-chinese.png";
import categoryJapaneseImage from "./category-japanese.png";
import categoryWesternImage from "./category-western.png";
import categoryEtcImage from "./category-etc.png";

const CATEGORY = ["한식", "중식", "일식", "아시안", "양식"] as const;
type Category = (typeof CATEGORY)[number];

const categoryImages: Readonly<Record<Category, string>> = {
  한식: categoryKoreanImage,
  중식: categoryChineseImage,
  일식: categoryJapaneseImage,
  아시안: categoryAsianImage,
  양식: categoryWesternImage,
};

const isCategory = (targetCategory: string): targetCategory is Category => {
  return !!CATEGORY.find((category) => category === targetCategory);
};

const getCategoryImage = (category: string) => {
  if (isCategory(category)) return categoryImages[category];

  return categoryEtcImage;
};

export default getCategoryImage;
