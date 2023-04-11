interface CurrentDisplayStatus {
  category: string;
  sortBy: string;
}

export interface State {
  restaurantList: [];
  selectedRestaurant: number;
  currentDisplayStatus: CurrentDisplayStatus;
}
