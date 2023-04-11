import React from "react";
import styled from "styled-components";
import { RestaurantItemPropsType } from "../types/restaurant";
import { RestaurantItem } from "./restaurantItem";

export class RestaurantSection extends React.Component<{
  restaurants: RestaurantItemPropsType[];
}> {
  render() {
    return (
      <RestaurantContainer>
        {this.props.restaurants.map((restaurant: RestaurantItemPropsType) => (
          <RestaurantItem key={restaurant.id} {...restaurant} />
        ))}
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
