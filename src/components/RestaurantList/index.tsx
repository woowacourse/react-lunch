import "./index.css";
import { Component } from "react";
import RestaurantItem from "../RestaurantItem";
import { CategoryOption, Restaurant, SortOption } from "../../types/restaurant";
import mockData from "../../data/mockData.json";
import { LocalStorage } from "../../utils/LocalStorage";

const LOCAL_STORAGE_KEY = "RESTAURANT_LIST";

interface RestaurantListProps {
  selectedCategory: CategoryOption;
  selectedSort: SortOption;
  setModalContents: (Restaurant: Restaurant) => void;
  openModal: () => void;
}

interface RestaurantListState {
  filteredRestaurants: Restaurant[];
}

export default class RestaurantList extends Component<RestaurantListProps> {
  allRestaurants: Restaurant[] = this.getInitList();

  state: RestaurantListState = {
    filteredRestaurants: this.getSortedListByName(this.allRestaurants),
  };

  componentDidUpdate(prevProps: RestaurantListProps) {
    if (prevProps.selectedCategory !== this.props.selectedCategory) {
      const restaurantListByCategory = this.getListByCategory(this.allRestaurants);
      const sortedRestaurantList = this.getSortedList(restaurantListByCategory);

      this.setState({ filteredRestaurants: sortedRestaurantList });
    }

    if (prevProps.selectedSort !== this.props.selectedSort) {
      const sortedRestaurantList = this.getSortedList(this.state.filteredRestaurants);

      this.setState({ filteredRestaurants: sortedRestaurantList });
    }
  }

  getInitList() {
    const localStorageData: Restaurant[] = LocalStorage.getData(LOCAL_STORAGE_KEY);
    if (localStorageData) {
      return localStorageData;
    }

    const mockList: Restaurant[] = JSON.parse(JSON.stringify(mockData.restaurants));
    LocalStorage.setData(LOCAL_STORAGE_KEY, mockList);
    return mockList;
  }

  getListByCategory(restaurants: Restaurant[]) {
    const { selectedCategory } = this.props;

    if (selectedCategory === "all") {
      return restaurants;
    }

    return restaurants.filter((restaurant) => restaurant.category === selectedCategory);
  }

  getSortedList(restaurants: Restaurant[]) {
    const { selectedSort } = this.props;

    if (selectedSort === "name") {
      return this.getSortedListByName(restaurants);
    }
    if (selectedSort === "distance") {
      return this.getSortedListByDistance(restaurants);
    }

    return restaurants;
  }

  getSortedListByName(restaurants: Restaurant[]) {
    return [...restaurants].sort((a, b) => a.name.localeCompare(b.name));
  }

  getSortedListByDistance(restaurants: Restaurant[]) {
    return [...restaurants].sort((a, b) => a.distance - b.distance);
  }

  render() {
    const { filteredRestaurants } = this.state;
    const { setModalContents, openModal } = this.props;

    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              setModalContents={setModalContents}
              openModal={openModal}
            />
          ))}
        </ul>
      </section>
    );
  }
}
