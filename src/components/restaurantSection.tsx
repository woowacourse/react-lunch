import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getRestaurantData } from "../api/getData";
import { SELECT_OPTION } from "../constant/select";
import { Restaurant } from "../types/restaurant";
import { CategoryUnion, SortingUnion } from "../types/select";
import RestaurantItem from "./restaurantItem";

interface PropsType {
  sorting: SortingUnion;
  category: CategoryUnion;
}

export default function RestaurantSection(props: PropsType) {
  const { sorting, category } = props;
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await getRestaurantData();
      setRestaurants([...data]);
    }
    getData();
  }, []);

  function getFilteredRestaurants(): Restaurant[] {
    if (category === SELECT_OPTION.ALL) return restaurants;

    return restaurants.filter((restaurant) => restaurant.category === category);
  }

  function getSortedRestaurants(
    filteredRestaurant: Restaurant[]
  ): Restaurant[] | void {
    if (sorting === SELECT_OPTION.NAME) {
      return [...filteredRestaurant].sort((resA, resB) =>
        resA.name.localeCompare(resB.name)
      );
    }

    if (sorting === SELECT_OPTION.TAKING_TIME) {
      return [...filteredRestaurant].sort(
        (resA, resB) => resA.takingTime - resB.takingTime
      );
    }
  }

  function getFinalRestaurants(): Restaurant[] | void {
    const filteredRestaurants = getFilteredRestaurants();
    return getSortedRestaurants(filteredRestaurants);
  }

  return (
    <RestaurantContainer>
      {getFinalRestaurants()?.map((restaurant: Restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </RestaurantContainer>
  );
}

const RestaurantContainer = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;
