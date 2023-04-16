export const CATEGORY = {
  전체: "all",
  한식: "korean",
  중식: "chinese",
  일식: "japanese",
  양식: "western",
  아시안: "asian",
  기타: "etc",
};

export const SORTINGWAY = {
  이름순: "name",
  거리순: "distance",
};

export interface AppState {
  restaurants: object[];
  modalOpen: boolean;
  modalInfo: object;
  sortBy: typeof SORTINGWAY[keyof typeof SORTINGWAY];
  categorizeBy: typeof CATEGORY[keyof typeof CATEGORY];
}
// export type Category = typeof CATEGORY[keyof typeof CATEGORY];

// export interface Restaurant {
//   category: Category;
//   name: string;
//   distance: number;
//   description: string;
//   favorite: boolean;
// }

// export type Sort = typeof SORTINGWAY[keyof typeof SORTINGWAY];

// export type SelectBoxOption = {
//   label: string;
//   value: string | number;
// };

// interface RestaurantListProps {
//   restaurants: Restaurant[];
//   sortBy: Sort;
//   categorizeBy: Category;
// }

// interface RestaurantItemProps {
//   restaurant: Restaurant;
// }

// interface RestaurantItemState {
//   modalOpen: boolean;
// }

// interface ModalProps {
//   restaurant: Restaurant;
//   closeModal: () => void;
// }

// interface SelectBoxProps {
//   options: SelectBoxOption[];
//   setState: ChangeEventHandler<HTMLSelectElement>;
// }

// interface AppState {
//   restaurants: Restaurant[];
//   sortBy: Sort;
//   categorizeBy: Category;
// }
