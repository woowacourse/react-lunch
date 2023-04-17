import { useState, useEffect } from "react";
import {
  AlignFilter,
  CategoryFilter,
  Restaurant,
} from "../../types/restaurants";
import { fetchMockRestaurants } from "../../api/restaurants";
import { alignBy, filterBy } from "../../domain/restaurants";
import { BY_NAME } from "../../constants/restaurants";
import { convertTypeAcquisitionFromJson } from "typescript";

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
      localStorage.setItem("restaurantListOrigin", JSON.stringify(data));
      setList(JSON.stringify(data));
    };

    const setList = async (data: string) => {
      const list = await JSON.parse(data);
      setRestaurantList(list);
      setRestaurantListOrigin(list);
    };

    if (!localStorage.getItem("restaurantListOrigin")) {
      setData();
    }

    const data = localStorage.getItem("restaurantListOrigin");
    console.log(data);
    if (data) {
      setList(data);
    }
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
