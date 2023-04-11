export interface RestaurantItemPropsType {
  id: string;
  category: Category;
  name: string;
  takingTime: TakingTime;
  description: string;
  link: string;
}

type Category = "전체" | "일식" | "양식" | "한식" | "아시안" | "중식" | "기타";
type TakingTime = 5 | 10 | 15 | 20 | 25 | 30;
