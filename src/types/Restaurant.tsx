export interface Restaurant {
  "category": string;
  "name": string;
  "distance": number;
  "description": string;
  "favorite": boolean
}

export type Sort = "name" | "distance";

export type Category = "all" | "chinese" | "korean" | "asian" | "western" | "japanese" | "etc";

export type SelectBoxOption = {
  label: string;
  value: string | number;
}
