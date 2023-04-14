import { Component, createRef, RefObject } from 'react';
import styled from 'styled-components';
import type { RestaurantInfo } from '../types';
import Restaurant from './Restaurant';
import RestaurantInfoModal from './RestaurantInfoModal';

interface RestaurantList {
  restaurantList: RestaurantInfo[];
  category: string;
}

class Restaurants extends Component<RestaurantList> {
  restaurantInfoModal: RefObject<HTMLDialogElement> = createRef();

  state = {
    selectedRestaurant: null,
  };

  handleModalOpenButton = (restaurantId: string) => {
    this.setState({
      selectedRestaurant: this.findSelectedRestaurant(restaurantId),
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
          selectedRestaurant={this.state.selectedRestaurant}
          onClose={this.handleModalCloseButton}
          refModal={this.restaurantInfoModal}
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
