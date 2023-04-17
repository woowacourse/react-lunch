import styled from 'styled-components';

import RestaurantManager from '../domain/RestaurantManager';
import { RestaurantItem } from './RestaurantItem';
import { Category } from '../types/RestaurantDetail';
import { useRef, useState } from 'react';
import { DetailModal } from './DetailModal';
import { createPortal } from 'react-dom';

interface RestaurantListProps {
  category: Category;
  sort: string;
}

const fetchRestaurants = (category: Category, sort: string) => {
  return RestaurantManager.getRestaurantListFilteredByOptions(category, sort);
};

export const RestaurantList = ({ category, sort }: RestaurantListProps) => {
  const [showModal, setShowModal] = useState(false);
  const idRef = useRef(-1);

  const handleClickItem: React.MouseEventHandler<HTMLLIElement> = (event) => {
    const eventTarget = event.target as HTMLElement;

    if ('id' in eventTarget) {
      idRef.current = Number(eventTarget.id);
    }

    setShowModal(true);
  };

  const restaurants = fetchRestaurants(category, sort);

  return (
    <>
      <RestaurantListContainer>
        {restaurants.map((itemDetail) => (
          <RestaurantItem
            key={itemDetail.id}
            itemDetail={itemDetail}
            onClickItem={handleClickItem}
          ></RestaurantItem>
        ))}
      </RestaurantListContainer>
      {showModal &&
        createPortal(
          <DetailModal
            setShow={setShowModal}
            restaurantID={idRef.current}
          ></DetailModal>,
          document.body
        )}
    </>
  );
};

const RestaurantListContainer = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;
