import React from "react";
import styled from "styled-components";
import { getRestaurantData } from "../api/getData";
import { SELECT_OPTION } from "../constant/select";
import { Restaurant } from "../types/restaurant";
import { CategoryUnion, SortingUnion } from "../types/select";
import { ItemModal } from "./itemModal";
import { RestaurantItem } from "./restaurantItem";

interface PropsType {
  sorting: SortingUnion;
  category: CategoryUnion;
}

interface StateType {
  restaurants: Restaurant[];
  clickedRestaurant: Restaurant | null;
  isModalOpen: boolean;
}

export class RestaurantSection extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      restaurants: [],
      clickedRestaurant: null,
      isModalOpen: false,
    };
  }

  async componentDidMount() {
    const data = await getRestaurantData();

    this.setState({
      restaurants: data,
    });
  }

  getFilteredRestaurants() {
    const category = this.props.category;

    if (category === SELECT_OPTION.ALL) return this.state.restaurants;

    return this.state.restaurants.filter(
      (restaurant) => restaurant.category === category
    );
  }

  getSortedRestaurants(filteredRestaurant: Restaurant[]) {
    const sorting = this.props.sorting;

    if (sorting === SELECT_OPTION.NAME) {
      return filteredRestaurant.sort((resA, resB) =>
        resA.name.localeCompare(resB.name)
      );
    }
    if (sorting === SELECT_OPTION.TAKING_TIME) {
      return filteredRestaurant.sort(
        (resA, resB) => resA.takingTime - resB.takingTime
      );
    }
  }

  getFinalRestaurants() {
    const filteredRestaurants = this.getFilteredRestaurants();
    return this.getSortedRestaurants(filteredRestaurants);
  }

  openModal(id: string) {
    const restaurant = this.state.restaurants.find(
      (restaurant) => restaurant.id === id
    );
    if (restaurant) {
      this.setState({ isModalOpen: true, clickedRestaurant: restaurant });
    }
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <>
        <RestaurantContainer>
          {this.getFinalRestaurants()?.map((restaurant: Restaurant) => (
            <div
              onClick={() => this.openModal(restaurant.id)}
              key={restaurant.id}>
              <RestaurantItem restaurant={restaurant} />
            </div>
          ))}
        </RestaurantContainer>
        {this.state.isModalOpen && this.state.clickedRestaurant && (
          <ItemModal
            restaurant={this.state.clickedRestaurant}
            closeModal={this.closeModal.bind(this)}
          />
        )}
      </>
    );
  }
}

const RestaurantContainer = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;
