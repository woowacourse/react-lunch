import { Component } from "react";
import styled from "styled-components";
import Restaurant from "./restaurant";
import { RestaurantInfo } from "../types";
import { restaurantStore } from "../restaurantStore";
import RestaurantInfoModal from "./restaurantInfoModal";
import { $ } from "../utils/selector";

class Restaurants extends Component {
  handleModalOpenButton = () => {
    $<HTMLDialogElement>("#restaurant-detail").showModal();
  };

  handleModalCloseButton = () => {
    $<HTMLDialogElement>("#restaurant-detail").close();
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
              onClick={this.handleModalOpenButton}
            />
          ))}
        </RestaurantList>

        <RestaurantInfoModal
          selectedRestaurant={this.findSelectedRestaurant("2")}
          onClose={this.handleModalCloseButton}
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
