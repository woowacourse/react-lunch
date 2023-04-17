import React, { useState, useEffect } from "react";
import {
  AlignFilter,
  CategoryFilter,
  Restaurant,
} from "../../types/restaurants";
import { fetchMockRestaurants } from "../../api/restaurants";
import { alignBy, filterBy } from "../../domain/restaurants";
import { BY_NAME } from "../../constants/restaurants";

export default function useRestaurant(
  category: CategoryFilter,
  align: AlignFilter
) {
  const [restaurantListOrigin, setRestaurantListOrigin] = useState<
    Restaurant[]
  >([]);
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>([]);

  useEffect(() => {
    const setData = async () => {
      const data = await fetchMockRestaurants({ align: BY_NAME });
      setRestaurantList(data);
      setRestaurantListOrigin(data);
    };

    setData();
  }, []);

  useEffect(() => {
    const resFilter = filterBy(category, restaurantListOrigin);
    const resAlign = [...alignBy(align, resFilter)];
    setRestaurantList(resAlign);
  }, [category, align]);

  return {
    restaurantList,
  };
}
