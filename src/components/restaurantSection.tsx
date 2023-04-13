import React from "react";
import styled from "styled-components";
import { getRestaurantData } from "../api/getData";
import { SELECT_OPTION } from "../constant/select";
import { Restaurant } from "../types/restaurant";
import { CategoryUnion, SortingUnion } from "../types/select";
import { RestaurantItem } from "./restaurantItem";

interface PropsType {
  sorting: SortingUnion;
  category: CategoryUnion;
}

interface StateType {
  restaurants: Restaurant[];
}

export class RestaurantSection extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      restaurants: [],
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

  render() {
    return (
      <>
        <RestaurantContainer>
          {this.getFinalRestaurants()?.map((restaurant: Restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </RestaurantContainer>
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
