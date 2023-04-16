import styled from 'styled-components';

import RestaurantManager from '../domain/RestaurantManager';
import { RestaurantItem } from './RestaurantItem';
import { Category, RestaurantDetail } from '../types/RestaurantDetail';
import { useEffect, useRef, useState } from 'react';
import { DetailModal } from './DetailModal';
import { createPortal } from 'react-dom';

interface RestaurantListProps {
  category: Category;
  sort: string;
}

const useRestaurants = (category: Category, sort: string) => {
  const [restaurants, setRestaurants] = useState<RestaurantDetail[]>([]);

  useEffect(() => {
    setRestaurants(
      RestaurantManager.getRestaurantListFilteredByOptions(category, sort)
    );
  }, [category, sort]);

  return restaurants;
};

export const RestaurantList = ({ category, sort }: RestaurantListProps) => {
  const restaurants = useRestaurants(category, sort);
  const [show, setShow] = useState(false);
  const idRef = useRef(0);

  const handleClickItem: React.MouseEventHandler<HTMLLIElement> = (event) => {
    const eventTarget = event.target as HTMLElement;

    if ('id' in eventTarget) {
      idRef.current = Number(eventTarget.id);
    }

    setShow(true);
  };

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
      {show &&
        createPortal(
          <DetailModal
            setShow={setShow}
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
