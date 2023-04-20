import styled from 'styled-components';

import RestaurantManager from '../domain/RestaurantCollector';
import { RestaurantItem } from './RestaurantItem';
import { Category } from '../types/RestaurantDetail';
import { useState } from 'react';
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
  const [id, setId] = useState(0);

  const handleClickItem: (
    id: number
  ) => React.MouseEventHandler<HTMLLIElement> = (id) => {
    return () => {
      setId(id);
      setShowModal(true);
    };
  };

  const restaurants = fetchRestaurants(category, sort);

  return (
    <>
      <RestaurantListContainer>
        {restaurants.map((itemDetail) => (
          <RestaurantItem
            key={itemDetail.id}
            itemDetail={itemDetail}
            onClickItem={handleClickItem(itemDetail.id)}
          ></RestaurantItem>
        ))}
      </RestaurantListContainer>
      {showModal &&
        createPortal(
          <DetailModal setShow={setShowModal} restaurantID={id}></DetailModal>,
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
