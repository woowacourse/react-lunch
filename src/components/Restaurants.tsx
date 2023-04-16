import { useRef, useState } from "react";
import styled from "styled-components";
import Restaurant from "./Restaurant";
import { RestaurantInfo } from "../types";
import RestaurantInfoModal from "./RestaurantInfoModal";

interface Props {
  restaurantList: RestaurantInfo[];
  category: string;
}

const Restaurants = (props: Props) => {
  const restaurantInfoModal = useRef<HTMLDialogElement>(null);

  const [restaurant, setRestaurant] = useState<RestaurantInfo | undefined>(
    undefined
  );

  const handleModalOpenButton = (restaurantId: string) => {
    setRestaurant(findSelectedRestaurant(restaurantId));

    const modal = restaurantInfoModal.current;
    if (modal) modal.showModal();
  };

  const handleModalCloseButton = () => {
    const modal = restaurantInfoModal.current;
    if (modal) modal.close();
  };

  const findSelectedRestaurant = (restaurantId: string) => {
    return props.restaurantList.find(
      (restaurant) => restaurant.id === restaurantId
    );
  };

  return (
    <>
      <RestaurantListContainer>
        {props.restaurantList.map((restaurant: RestaurantInfo) => (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            onClick={() => handleModalOpenButton(restaurant.id)}
          />
        ))}
      </RestaurantListContainer>

      <RestaurantInfoModal
        selectedRestaurant={restaurant}
        onClose={() => handleModalCloseButton()}
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
