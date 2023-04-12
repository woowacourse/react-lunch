export type Category = '한식' | '양식' | '중식' | '일식' | '아시안' | '기타';
export type All = '전체';
export type Criterion = '이름순' | '거리순';

export interface Restaurant {
  id: number;
  category: Category;
  name: string;
  distance: number;
  description: string;
  link: string;
}

export interface RestaurantListState {
  isClicked: boolean;
  clickedData: Restaurant;
  category: Category | All;
  criterion: Criterion;
  restaurantsData: Restaurant[];
}

export interface LunchDataServiceType {
  restaurants: Restaurant[];
  setInitialRestaurants(): void;
  filterBy(category: Category | All): Restaurant[];
  sortBy(criterion: Criterion, restaurants: Restaurant[]): Restaurant[];
  filterAndSort(category: Category | All, criterion: Criterion): Restaurant[];
  getRestaurant(id: string): Restaurant;
  getRestaurants(category: Category | All, criterion: Criterion): Restaurant[];
  getProcessedRestaurants(category: Category | All, criterion: Criterion): Restaurant[];
}

export interface ModalProps {
  children?: React.ReactNode;
}

export interface DetailModalProps extends ModalProps {
  data: Restaurant;
}

export interface ModalState {
  children?: React.ReactNode;
}

export interface DetailModalState extends ModalState {
  data: Restaurant;
}

export interface SelectBoxProps {
  filter: object;
  onChangeCategory?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeCriterion?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
