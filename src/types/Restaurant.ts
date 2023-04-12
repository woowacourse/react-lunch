type Restaurant = {
  category: Category;
  storeName: string;
  distance: number;
  detail: string;
  link: string;
  favorite: boolean;
};

type Category = "전체" | "한식" | "중식" | "일식" | "양식" | "아시안" | "기타";

type SortBy = "이름순" | "거리순";

type RestaurantJSON = {
  category: string;
  storeName: string;
  distance: number;
  detail: string;
  link: string;
  favorite: boolean;
};

export type { Restaurant, Category, SortBy, RestaurantJSON };
