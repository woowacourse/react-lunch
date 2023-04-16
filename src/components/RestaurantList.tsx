import { RestaurantItem } from './RestaurantItem';
import RestaurantManager from '../domain/RestaurantManager';
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
    // TODO: event target 의 타입을 지정하는 방법
    const eventTarget = event.target as HTMLElement;

    if ('id' in eventTarget) {
      idRef.current = Number(eventTarget.id);
    }

    setShow(true);
  };

  return (
    <>
      <ul>
        {restaurants.map((itemDetail) => (
          <RestaurantItem
            key={itemDetail.id}
            itemDetail={itemDetail}
            onClickItem={handleClickItem}
          ></RestaurantItem>
        ))}
      </ul>
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
