import { Component } from "react";
import styled from "styled-components";
import Restaurant from "./restaurant";
import { RestaurantInfo } from "../types";
import { restaurantStore } from "../restaurantStore";
import RestaurantInfoModal from "./restaurantInfoModal";
import { $ } from "../utils/selector";

class Restaurants extends Component {
  handleRestaurantModal = () => {
    $<HTMLDialogElement>("#restaurant-detail").showModal();
  };

  findSelectedRestaurant = (restaurantId: string) => {
    return restaurantStore.restaurants.find(
      (restaurant) => restaurant.id === restaurantId
    );
  };

  render() {
    return (
      <>
        <RestaurantList>
          {restaurantStore.restaurants.map((restaurant: RestaurantInfo) => (
            <Restaurant
              key={restaurant.id}
              {...restaurant}
              onClick={this.handleRestaurantModal}
            />
          ))}
        </RestaurantList>

        <RestaurantInfoModal
          selectedRestaurant={this.findSelectedRestaurant("2")}
        ></RestaurantInfoModal>
      </>
    );
  }
}

const RestaurantList = styled.ul`
  padding: 0 16px;
  margin: 16px 0;
`;

export default Restaurants;
