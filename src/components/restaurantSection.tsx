import React from "react";
import styled from "styled-components";
import { Restaurant } from "../types/restaurant";
import { RestaurantItem } from "./restaurantItem";

interface PropsType {
  restaurants: Restaurant[] | undefined;
}

export class RestaurantSection extends React.Component<PropsType> {
  render() {
    return (
      <>
        <RestaurantContainer>
          {this.props.restaurants?.map((restaurant: Restaurant) => (
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
