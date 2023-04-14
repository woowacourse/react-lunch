import { Component, createRef, RefObject } from 'react';
import styled from 'styled-components';
import type { RestaurantInfo } from '../types';
import RestaurantItem from './RestaurantItem';
import RestaurantInfoModal from './RestaurantInfoModal';

interface RestaurantListProps {
  restaurantList: RestaurantInfo[];
  category: string;
}

class RestaurantList extends Component<RestaurantListProps> {
  restaurantInfoModal: RefObject<HTMLDialogElement> = createRef();

  state = {
    selectedRestaurant: null,
  };

  handleModalOpen = (restaurantId: string) => {
    this.setState({
      selectedRestaurant: this.findSelectedRestaurant(restaurantId),
    });

    const restaurantInfoModal = this.restaurantInfoModal.current;
    if (restaurantInfoModal) {
      restaurantInfoModal.showModal();
    }
  };

  handleModalClose = () => {
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
            <RestaurantItem
              key={restaurant.id}
              restaurant={restaurant}
              onClick={() => this.handleModalOpen(restaurant.id)}
            />
          ))}
        </RestaurantListContainer>

        <RestaurantInfoModal
          restaurant={this.state.selectedRestaurant}
          onClose={this.handleModalClose}
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

export default RestaurantList;
