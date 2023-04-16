import { useRef, useState } from "react";
import styled from "styled-components";
import Restaurant from "./Restaurant";
import { RestaurantInfo } from "../types";
import RestaurantInfoModal from "./RestaurantInfoModal";

interface Props {
  restaurantList: RestaurantInfo[];
}

const Restaurants = ({ restaurantList }: Props) => {
  const restaurantInfoModal = useRef<HTMLDialogElement>(null);

  const [restaurant, setRestaurant] = useState<RestaurantInfo | undefined>(
    undefined
  );

  const handleModalButton = () => {
    const modal = restaurantInfoModal.current;
    if (!modal) return;

    modal.open ? modal.close() : modal.showModal();
  };

  const findSelectedRestaurant = (restaurantId: string) => {
    return restaurantList.find((restaurant) => restaurant.id === restaurantId);
  };

  return (
    <>
      <RestaurantListContainer>
        {restaurantList.map((restaurant: RestaurantInfo) => (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            onClick={() => {
              handleModalButton();
              setRestaurant(findSelectedRestaurant(restaurant.id));
            }}
          />
        ))}
      </RestaurantListContainer>

      <RestaurantInfoModal
        selectedRestaurant={restaurant}
        onClose={() => handleModalButton()}
        refModal={restaurantInfoModal}
      />
    </>
  );
};

const RestaurantListContainer = styled.ul`
  padding: 0 16px;
  margin: 16px 0;
`;

export default Restaurants;
