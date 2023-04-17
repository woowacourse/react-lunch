import { Restaurant } from "../../types/restaurant";

export interface RestaurantDetailModalProps {
  closeModal: () => void;
  restaurant: Restaurant;
}
