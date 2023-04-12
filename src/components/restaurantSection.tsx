import React from "react";
import styled from "styled-components";
import { getRestaurantData } from "../api/getData";
import { RestaurantItemPropsType } from "../types/restaurant";
import { SelectStateType } from "../types/select";
import { RestaurantItem } from "./restaurantItem";

export class RestaurantSection extends React.Component<
  SelectStateType,
  {
    restaurants: RestaurantItemPropsType[];
  }
> {
  constructor(props: SelectStateType) {
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

    if (category === "전체") return this.state.restaurants;

    return this.state.restaurants.filter(
      (restaurant) => restaurant.category === category
    );
  }

  getSortedRestaurants(filteredRestaurant: RestaurantItemPropsType[]) {
    const sorting = this.props.sorting;

    if (sorting === "이름순") {
      return filteredRestaurant.sort((resA, resB) =>
        resA.name.localeCompare(resB.name)
      );
    }
    if (sorting === "거리순") {
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
      <RestaurantContainer>
        {this.getFinalRestaurants()?.map(
          (restaurant: RestaurantItemPropsType) => (
            <RestaurantItem key={restaurant.id} {...restaurant} />
          )
        )}
      </RestaurantContainer>
    );
  }
}

const RestaurantContainer = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;
