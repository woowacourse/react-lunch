import { RefObject } from "react";

export interface RestaurantApp {
  filteredRestaurants: RestaurantInfo[];
  category: string;
  sorting: string;
}

export interface RestaurantSelect {
  onChangeCategory: (event: string) => void;
  onChangeSorting: (event: string) => void;
  selectedCategory: string;
  selectedSorting: string;
}

export interface RestaurantList {
  restaurantList: RestaurantInfo[];
  category: string;
}

export interface RestaurantItem {
  restaurant: RestaurantInfo;
  onClick: () => void;
}

export interface RestaurantInfo {
  id: string;
  category: string;
  name: string;
  takingTime: number;
  description: string;
  link: string;
}

export interface RestaurantModal {
  selectedRestaurant: null | RestaurantInfo;
  onClose: () => void;
  handleModal: RefObject<HTMLDialogElement>;
}
