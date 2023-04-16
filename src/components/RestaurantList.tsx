import { RestaurantItem } from './RestaurantItem';
import RestaurantManager from '../domain/RestaurantManager';
import { Category, RestaurantDetail } from '../types/RestaurantDetail';
import { useEffect, useState } from 'react';

interface RestaurantListProps {
  category: Category;
  sort: string;
  onClickItem: React.MouseEventHandler<HTMLLIElement>;
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

export const RestaurantList = ({
  category,
  sort,
  onClickItem,
}: RestaurantListProps) => {
  const restaurants = useRestaurants(category, sort);

  return (
    <ul>
      {restaurants.map((itemDetail) => (
        <RestaurantItem
          key={itemDetail.id}
          itemDetail={itemDetail}
          onClickItem={onClickItem}
        ></RestaurantItem>
      ))}
    </ul>
  );
};
