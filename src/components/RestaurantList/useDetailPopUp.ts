import React, { useState } from "react";
import { Restaurant } from "../../types/restaurants";

export default function useDetailPopUp() {
  const [isOpened, setIsOpened] = useState(false);
  const [focusedRestaurant, setFocusedRestaurant] = useState<Restaurant | null>(
    null
  );
  const focusRestaurant = (focusedRestaurant: Restaurant) => {
    setFocusedRestaurant(focusedRestaurant);
    setIsOpened(true);
  };

  const closeModal = () => {
    setFocusedRestaurant(null);
    setIsOpened(false);
  };

  return {
    isOpened,
    focusedRestaurant,
    focusRestaurant,
    closeModal,
  };
}
