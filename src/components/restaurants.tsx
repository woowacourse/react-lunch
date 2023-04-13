import { Component, createRef, RefObject } from "react";
import styled from "styled-components";
import Restaurant from "./Restaurant";
import { RestaurantInfo, RestaurantList } from "../types";
import RestaurantInfoModal from "./RestaurantInfoModal";

class Restaurants extends Component<RestaurantList> {
  restaurantInfoModal: RefObject<HTMLDialogElement> = createRef();

  state = {
    restaurant: null,
  };

  handleModalOpenButton = (restaurantId: string) => {
    this.setState({
      restaurant: this.findSelectedRestaurant(restaurantId),
    });

    const restaurantInfoModal = this.restaurantInfoModal.current;
    if (restaurantInfoModal) {
      restaurantInfoModal.showModal();
    }
  };

  handleModalCloseButton = () => {
    const restaurantInfoModal = this.restaurantInfoModal.current;
    if (restaurantInfoModal) {
      restaurantInfoModal.close();
    }
  };

  findSelectedRestaurant = (restaurantId: string) => {
    return this.props.restaurantList.find(
      (restaurant) => restaurant.id === restaurantId
    );
  };

  render() {
    return (
      <>
        <RestaurantListContainer>
          {this.props.restaurantList.map((restaurant: RestaurantInfo) => (
            <Restaurant
              key={restaurant.id}
              restaurant={restaurant}
              onClick={() => this.handleModalOpenButton(restaurant.id)}
            />
          ))}
        </RestaurantListContainer>

        <RestaurantInfoModal
          selectedRestaurant={this.state.restaurant}
          onClose={this.handleModalCloseButton}
          handleModal={this.restaurantInfoModal}
        ></RestaurantInfoModal>
      </>
    );
  }
}

const RestaurantListContainer = styled.ul`
  padding: 0 16px;
  margin: 16px 0;
`;

export default Restaurants;
