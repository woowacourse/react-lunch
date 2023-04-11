export type Category = "한식" | "중식" | "일식" | "아시안" | "양식" | "기타";

export interface Restaurant {
  id: number;
  category: Category;
  name: string;
  distance: number;
  description: string;
  link: string
}
