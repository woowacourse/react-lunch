import asian from "../assets/category-asian.png";
import chinese from "../assets/category-chinese.png";
import etc from "../assets/category-etc.png";
import japanese from "../assets/category-japanese.png";
import korean from "../assets/category-korean.png";
import western from "../assets/category-western.png";
import type { Category } from "../types/Restaurant";

// TODO: 전체를 없앨 수 있는 타입 고민하기
export const CATEGORY_ICONS: Record<Category, string> = {
  전체: "",
  한식: korean,
  중식: chinese,
  일식: japanese,
  양식: western,
  아시안: asian,
  기타: etc,
};

export const CATEGORIES = [
  "전체",
  "한식",
  "중식",
  "일식",
  "양식",
  "아시안",
  "기타",
] as const;

export const SORT_BY = ["이름순", "거리순"] as const;
