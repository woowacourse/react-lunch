import "./index.css";
import { Component } from "react";
import RestaurantItem from "../RestaurantItem";
import { CategoryOption, Restaurant, SortOption } from "../../types/restaurant";
import mockData from "../../data/mockData.json";

interface RestaurantListProps {
  selectedCategory: CategoryOption;
  selectedSort: SortOption;
}

interface RestaurantListState {
  filteredRestaurants: Restaurant[];
}
export default class RestaurantList extends Component<RestaurantListProps> {
  allRestaurants: Restaurant[] = JSON.parse(JSON.stringify(mockData.restaurants));

  state: RestaurantListState = {
    filteredRestaurants: this.sort(this.allRestaurants),
  };

  componentDidUpdate(prevProps: RestaurantListProps) {
    if (prevProps.selectedCategory !== this.props.selectedCategory) {
      const updatedRestaurants = this.filter();
      this.setState({ filteredRestaurants: this.sort(updatedRestaurants) });
    }
    if (prevProps.selectedSort !== this.props.selectedSort) {
      this.setState({ filteredRestaurants: this.sort(this.state.filteredRestaurants) });
    }
  }

  render() {
    return (
      <section className="restaurant-list-container">
        <ul className="restaurant-list">
          {this.state.filteredRestaurants.map((restaurantData) => (
            <RestaurantItem key={restaurantData.id} {...restaurantData} />
          ))}
        </ul>
      </section>
    );
  }

  filter() {
    const { selectedCategory } = this.props;

    if (selectedCategory === "all") {
      return this.state.filteredRestaurants;
    }

    const allRestaurants = this.allRestaurants.filter((restaurant) => restaurant.category === selectedCategory);

    return allRestaurants;
  }

  sort(allRestaurants: Restaurant[]) {
    const condition = this.props.selectedSort;

    if (condition === "name") {
      allRestaurants.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (condition === "distance") {
      allRestaurants.sort((a, b) => a.distance - b.distance);
    }

    return allRestaurants;
  }
}
