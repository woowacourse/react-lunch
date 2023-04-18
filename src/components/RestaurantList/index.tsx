import "./index.css";
import { useState, useEffect } from "react";
import RestaurantItem from "../RestaurantItem";
import { CategoryOption, Restaurant, SortOption } from "../../types/restaurant";
import { useLocalStorage } from "../../hooks";
import getMockData from "../../data/getMockData";
import { LOCAL_STORAGE_KEY } from "../../constants";

interface RestaurantListProps {
  currentCategory: CategoryOption;
  currentSort: SortOption;
  onClickRestaurantItem: (Restaurant: Restaurant) => void;
}

const RestaurantList = ({ currentCategory, currentSort, onClickRestaurantItem }: RestaurantListProps) => {
  const mockList: Restaurant[] = getMockData();
  const [allRestaurantList] = useLocalStorage<Restaurant[]>(LOCAL_STORAGE_KEY, mockList);
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>(allRestaurantList);

  useEffect(() => {
    const restaurantListByCategory = getListByCategory(allRestaurantList);
    const sortedRestaurantList = getSortedList(restaurantListByCategory);

    setRestaurantList(sortedRestaurantList);
  }, [currentCategory, currentSort]);

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
