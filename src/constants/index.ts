export const ENGLISH_CATEGORY: Readonly<{ [key: string]: string }> = {
  아시안: "asian",
  한식: "korean",
  양식: "western",
  중식: "chinese",
  일식: "japanese",
  기타: "etc",
};

export const CATEGORY: Readonly<{ [key: string]: string }> = {
  ALL: "전체",
  KOREAN: "한식",
  CHINESE: "중식",
  JAPANESE: "일식",
  WESTERN: "양식",
  ASIAN: "아시안",
  ETC: "기타",
};

export const SORTING_SELECT: Readonly<{ [key: string]: string }> = {
  NAME: "이름순",
  DISTANCE: "거리순",
};

export const LANGUAGE: Readonly<string> = "ko-KR";
