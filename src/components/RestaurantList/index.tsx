import "./index.css";
import RestaurantItem from "../RestaurantItem";
import { CategoryOption, Restaurant, SortOption } from "../../types/restaurant";
import mockData from "../../data/mockData.json";
import { LocalStorage } from "../../utils/LocalStorage";
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "RESTAURANT_LIST";

interface RestaurantListProps {
  selectedCategory: CategoryOption;
  selectedSort: SortOption;
}

const getInitList = () => {
  const localStorageData: Restaurant[] = LocalStorage.getData(LOCAL_STORAGE_KEY);
  if (localStorageData) {
    return localStorageData;
  }

  const mockList: Restaurant[] = JSON.parse(JSON.stringify(mockData.restaurants));
  LocalStorage.setData(LOCAL_STORAGE_KEY, mockList);

  return mockList;
};

const allRestaurants: Restaurant[] = getInitList();

const RestaurantList = (props: RestaurantListProps) => {
  const [filteredRestaurants, setfilteredRestaurants] = useState(allRestaurants);
  const { selectedCategory, selectedSort } = props;

  useEffect(() => {
    const restaurantListByCategory = getListByCategory(allRestaurants);
    const sortedRestaurantList = getSortedList(restaurantListByCategory);

    setfilteredRestaurants(sortedRestaurantList);
  }, [selectedCategory]);

  useEffect(() => {
    const sortedRestaurantList = getSortedList(filteredRestaurants);

    setfilteredRestaurants(sortedRestaurantList);
  }, [selectedSort]);

  const getListByCategory = (restaurants: Restaurant[]) => {
    if (selectedCategory === "all") {
      return restaurants;
    }

    return restaurants.filter((restaurant) => restaurant.category === selectedCategory);
  };

  const getSortedList = (restaurants: Restaurant[]) => {
    if (selectedSort === "name") {
      return getSortedListByName(restaurants);
    }
    if (selectedSort === "distance") {
      return getSortedListByDistance(restaurants);
    }

    return restaurants;
  };

  const getSortedListByName = (restaurants: Restaurant[]) => {
    return [...restaurants].sort((a, b) => a.name.localeCompare(b.name));
  };

  const getSortedListByDistance = (restaurants: Restaurant[]) => {
    return [...restaurants].sort((a, b) => a.distance - b.distance);
  };

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </section>
  );
};

export default RestaurantList;
