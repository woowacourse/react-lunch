import { useRef, useState } from 'react';
import styled from 'styled-components';
import type { RestaurantInfo } from '../types';
import RestaurantItem from './RestaurantItem';
import RestaurantInfoModal from './RestaurantInfoModal';

interface RestaurantListProps {
  restaurantList: RestaurantInfo[];
}

const RestaurantList = ({ restaurantList }: RestaurantListProps) => {
  const restaurantInfoModal = useRef<HTMLDialogElement>(null);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<RestaurantInfo | null>(null);

  const findSelectedRestaurant = (restaurantId: string) => {
    return (
      restaurantList.find((restaurant) => restaurant.id === restaurantId) ||
      null
    );
  };

  const handleModalOpen = (restaurantId: string) => {
    setSelectedRestaurant(findSelectedRestaurant(restaurantId));

    const restaurantModal = restaurantInfoModal.current;
    if (restaurantModal) {
      restaurantModal.showModal();
    }
  };

  const handleModalClose = () => {
    const restaurantModal = restaurantInfoModal.current;
    if (restaurantModal) {
      restaurantModal.close();
    }
  };

  return (
    <>
      <RestaurantListContainer>
        {restaurantList.map((restaurant: RestaurantInfo) => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            onClick={() => handleModalOpen(restaurant.id)}
          />
        ))}
      </RestaurantListContainer>

      <RestaurantInfoModal
        restaurant={selectedRestaurant}
        onClose={handleModalClose}
        refModal={restaurantInfoModal}
      ></RestaurantInfoModal>
    </>
  );
};

const RestaurantListContainer = styled.ul`
  padding: 0 16px;
  margin: 16px 0;
`;

export default RestaurantList;
