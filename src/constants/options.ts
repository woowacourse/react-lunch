export const SELECT_NAME = {
  CATEGORY: "category",
  SORTING: "sorting",
} as const;

export const CATEGORY_OPTIONS = {
  TOTAL: "전체",
  KOREAN: "한식",
  CHINESE: "중식",
  JAPANESE: "일식",
  ASIAN: "아시안",
  WESTERN: "양식",
  ETC: "기타",
} as const;

export const SORTING_OPTIONS = {
  NAME: "이름순",
  DISTANCE: "거리순",
} as const;

export const CATEGORIES = Object.values(CATEGORY_OPTIONS);
export const SORTING = Object.values(SORTING_OPTIONS);

export type CategoryOptions = (typeof CATEGORIES)[number];
export type Category = Exclude<CategoryOptions, "전체" | "기타">;
