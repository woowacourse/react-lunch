import { useEffect, useState } from 'react';
import { fetchMockRestaurants } from '../api/restaurants';
import { BY_NAME } from '../constants/restaurants';
import { AlignFilter, FilterOptions, Restaurant } from '../types/restaurants';
import { alignBy, filterBy } from '../utils/restaurants';

export default function useRestaurantList(filterOptions: FilterOptions) {
  const { category, align } = filterOptions;
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>([]);
  const [restaurantListOrigin, setRestaurantListOrigin] = useState<
    Restaurant[]
  >([]);

  const getRestaurantList = async (options?: { align: AlignFilter }) => {
    const restaurantList = await fetchMockRestaurants(options);

    setRestaurantListOrigin(restaurantList);
    setRestaurantList(restaurantList);
  };

  useEffect(() => {
    getRestaurantList({ align: BY_NAME });
  }, []);

  useEffect(() => {
    const filtered = [...filterBy(category, restaurantListOrigin)];
    const aligned = [...alignBy(align, filtered)];

    setRestaurantList(aligned);
  }, [category, align]);

  return { restaurantList };
}
