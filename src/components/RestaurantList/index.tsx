import "./index.css";
import { Component } from "react";
import RestaurantItem from "../RestaurantItem";
import { CategoryOption, Restaurant, SortOption } from "../../types/restaurant";
import mockData from "../../data/mockData.json";

interface RestaurantListProps {
  selectedCategory: CategoryOption;
  selectedSort: SortOption;
}
export default class RestaurantList extends Component<RestaurantListProps> {
  render() {
    const dummyData: Restaurant[] = JSON.parse(JSON.stringify(mockData.restaurants));

    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list">
          {dummyData.map((restaurantData) => (
            <RestaurantItem key={restaurantData.id} {...restaurantData} />
          ))}
        </ul>
      </section>
    );
  }
}
