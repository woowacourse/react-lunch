import "./index.css";
import { useState, useEffect } from "react";
import RestaurantItem from "../RestaurantItem";
import { CategoryOption, Restaurant, SortOption } from "../../types/restaurant";
import mockData from "../../data/mockData.json";
import { LocalStorage } from "../../utils/LocalStorage";

const LOCAL_STORAGE_KEY = "RESTAURANT_LIST";

interface RestaurantListProps {
  currentCategory: CategoryOption;
  currentSort: SortOption;
  onClickRestaurantItem: (Restaurant: Restaurant) => void;
}

const RestaurantList = ({ currentCategory, currentSort, onClickRestaurantItem }: RestaurantListProps) => {
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>([]);

  useEffect(() => {
    const initRestaurantList = getInitList();

    setRestaurantList(initRestaurantList);
  }, []);

  useEffect(() => {
    const initRestaurantList = getInitList();
    const restaurantListByCategory = getListByCategory(initRestaurantList);
    const sortedRestaurantList = getSortedList(restaurantListByCategory);

    setRestaurantList(sortedRestaurantList);
  }, [currentCategory, currentSort]);

  const getInitList = () => {
    const localStorageData: Restaurant[] = LocalStorage.getData(LOCAL_STORAGE_KEY);
    if (localStorageData) {
      return localStorageData;
    }

    const mockList: Restaurant[] = JSON.parse(JSON.stringify(mockData.restaurants));
    LocalStorage.setData(LOCAL_STORAGE_KEY, mockList);
    return mockList;
  };

  const getListByCategory = (restaurants: Restaurant[]) => {
    if (currentCategory === "all") {
      return restaurants;
    }

    return restaurants.filter((restaurant) => restaurant.category === currentCategory);
  };

  const getSortedList = (restaurants: Restaurant[]) => {
    if (currentSort === "name") {
      return getSortedListByName(restaurants);
    }
    if (currentSort === "distance") {
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
        {restaurantList.map((restaurant) => {
          const handleClickRestaurantItem = () => {
            onClickRestaurantItem(restaurant);
          };

          return (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              onClickRestaurantItem={handleClickRestaurantItem}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default RestaurantList;
