import asianImage from "../assets/images/category-asian.png";
import chineseImage from "../assets/images/category-chinese.png";
import koreanImage from "../assets/images/category-korean.png";
import japaneseImage from "../assets/images/category-japanese.png";
import westernImage from "../assets/images/category-western.png";
import etcImage from '../assets/images/category-etc.png';
export const convertImage = (image: string) => {
  switch (image) {
    case "asian":
      return asianImage;
    case "korean":
      return koreanImage;
    case "japanese":
      return japaneseImage;
    case "western":
      return westernImage;
    case "chinese":
      return chineseImage;
    default:
      return etcImage;
  }
}
