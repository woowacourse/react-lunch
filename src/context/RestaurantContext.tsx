import type { Dispatch, PropsWithChildren } from 'react';
import { createContext, useMemo, useState } from 'react';

import type Filter from '../types/Filter';
import type Restaurant from '../types/Restaurant';

type RestaurantContextValue = {
  restaurants: Restaurant[];
  sortFilter: Filter<Restaurant> | null;
  setSortFilter: Dispatch<() => Filter<Restaurant> | null>;
  categoryFilter: Filter<Restaurant> | null;
  setCategoryFilter: Dispatch<() => Filter<Restaurant> | null>;
};

export const RestaurantContext = createContext<RestaurantContextValue>({
  restaurants: [],
  sortFilter: null,
  setSortFilter: () => {
    throw new Error('RestaurantContext가 존재하지 않습니다.');
  },
  categoryFilter: null,
  setCategoryFilter: () => {
    throw new Error('RestaurantContext가 존재하지 않습니다.');
  },
});

type RestaurantProviderProps = {
  initialRestaurants: Restaurant[];
};

export const RestaurantProvider = ({
  initialRestaurants,
  children,
}: PropsWithChildren<RestaurantProviderProps>) => {
  const [sortFilter, setSortFilter] = useState<RestaurantContextValue['sortFilter']>(null);
  const [categoryFilter, setCategoryFilter] =
    useState<RestaurantContextValue['categoryFilter']>(null);

  const contextValue = useMemo<RestaurantContextValue>(
    () => ({
      restaurants: initialRestaurants,
      sortFilter,
      setSortFilter,
      categoryFilter,
      setCategoryFilter,
    }),
    [sortFilter, categoryFilter],
  );

  return <RestaurantContext.Provider value={contextValue}>{children}</RestaurantContext.Provider>;
};
