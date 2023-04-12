type Category = '한식' | '양식' | '중식' | '일식' | '아시안' | '기타';

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
}

export interface RestaurantDataServiceType {
  restaurants: Restaurant[];
  setInitialRestaurants(): void;
  getRestaurant(id: string): Restaurant;
  getRestaurants(): Restaurant[];
}

export interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

export interface DetailModalProps extends ModalProps {
  data: Restaurant;
}

export interface ModalState {
  isOpen: boolean;
  children?: React.ReactNode;
}

export interface DetailModalState extends ModalState {
  data: Restaurant;
}
