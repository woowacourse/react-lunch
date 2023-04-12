export interface Restaurant {
  "category": string;
  "name": string;
  "distance": number;
  "description": string;
  "favorite": boolean
}

export type Sort = "name" | "distance";
