import React from "react";
import {
  AlignFilter,
  CategoryFilter,
  Restaurant,
} from "../../types/restaurants";
import RestaurantItem from "../RestaurantItem";
import St from "./styled";
import RestaurantDetailPopUp from "../RestaurantDetailPopUp";
import useRestaurant from "./useRestaurant";
import useDetailPopUp from "./useDetailPopUp";

interface RestaurantListProps {
  filterOptions: {
    category: CategoryFilter;
    align: AlignFilter;
  };
}

export default function RestaurantList({
  filterOptions: { category, align },
}: RestaurantListProps) {
  const { restaurantList } = useRestaurant(category, align);

  const { isOpened, focusedRestaurant, focusRestaurant, closeModal } =
    useDetailPopUp();

  const isBottomSheetOpened = isOpened && focusedRestaurant;
  return (
    <St.Layout>
      {restaurantList.map((restaurant: Restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          info={restaurant}
          onClick={() => focusRestaurant(restaurant)}
        />
      ))}
      {isBottomSheetOpened && (
        <RestaurantDetailPopUp
          restaurant={focusedRestaurant}
          close={closeModal}
        />
      )}
    </St.Layout>
  );
}
