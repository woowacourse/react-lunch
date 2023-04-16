import React, { useState, useEffect } from "react";
import { fetchMockRestaurants } from "../../api/restaurants";
import { BY_NAME } from "../../constants/restaurants";
import {
  AlignFilter,
  CategoryFilter,
  Restaurant,
} from "../../types/restaurants";
import { alignBy, filterBy } from "../../domain/restaurants";
import RestaurantItem from "../RestaurantItem";
import St from "./styled";
import RestaurantDetailPopUp from "../RestaurantDetailPopUp";

interface RestaurantListProps {
  filterOptions: {
    category: CategoryFilter;
    align: AlignFilter;
  };
}

export default function RestaurantList({
  filterOptions: { category, align },
}: RestaurantListProps) {
  const [restaurantListOrigin, setRestaurantListOrigin] = useState<
    Restaurant[]
  >([]);
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>([]);
  const [isOpened, setIsOpened] = useState(false);
  const [focusedRestaurant, setFocusedRestaurant] = useState<Restaurant | null>(
    null
  );


  useEffect(() => {
    restaurantFilter();
    restaurantAlign();
  }, [category]);

  useEffect(() => {
    restaurantAlign();
  }, [align]);

  };

  const restaurantFilter = () => {
    setRestaurantList(filterBy(category, restaurantListOrigin));
  };
  const restaurantAlign = () => {
    setRestaurantList(alignBy(align, restaurantList));
  };
  const focusRestaurant = (focusedRestaurant: Restaurant) => {
    setFocusedRestaurant(focusedRestaurant);
    setIsOpened(true);
  };

  const closeModal = () => {
    setFocusedRestaurant(null);
    setIsOpened(false);
  };

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
