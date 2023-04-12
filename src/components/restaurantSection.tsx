import React from "react";
import styled from "styled-components";
import { getRestaurantData } from "../api/getData";
import { RestaurantItemPropsType } from "../types/restaurant";
import { RestaurantItem } from "./restaurantItem";

export class RestaurantSection extends React.Component<
  any,
  {
    restaurants: RestaurantItemPropsType[];
  }
> {
  constructor(props: any) {
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

  render() {
    return (
      <RestaurantContainer>
        {this.state.restaurants.map((restaurant: RestaurantItemPropsType) => (
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
