import { useEffect, useState } from 'react';
import { fetchMockRestaurants } from '../../api/restaurants';
import { BY_NAME } from '../../constants/restaurants';
import {
  AlignFilter,
  CategoryFilter,
  Restaurant,
} from '../../types/restaurants';
import { alignBy, filterBy } from '../../utils/restaurants';
import RestaurantDetailBottomSheet from '../RestaurantDetailBottomSheet';
import RestaurantItem from '../RestaurantItem';
import St from './styled';

interface RestaurantListProps {
  filterOptions: {
    category: CategoryFilter;
    align: AlignFilter;
  };
}

export default function RestaurantList(props: RestaurantListProps) {
  const {
    filterOptions: { category, align },
  } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [focusedRestaurant, setFocusedRestaurant] = useState<Restaurant | null>(
    null
  );
  const isBottomSheetOpened = isOpened && focusedRestaurant;
  const [restaurantList, setRestaurantList] = useState<Restaurant[]>([]);
  const [restaurantListOrigin, setRestaurantListOrigin] = useState<
    Restaurant[]
  >([]);

  const onClickRestaurantItem = (restaurant: Restaurant) => {
    setFocusedRestaurant(restaurant);
    setIsOpened(true);
  };

  const closeModalHandler = () => {
    setFocusedRestaurant(null);
    setIsOpened(false);
  };

  useEffect(() => {
    (async () => {
      const restaurantList = await fetchMockRestaurants({ align: BY_NAME });

      setRestaurantListOrigin(restaurantList);
      setRestaurantList(restaurantList);
    })();
  }, []);

  useEffect(() => {
    const filtered = [...filterBy(category, restaurantListOrigin)];
    const aligned = [...alignBy(align, filtered)];

    setRestaurantList(aligned);
  }, [category, align]);

  return (
    <St.Layout data-cy="restaurant-list">
      {restaurantList.map((restaurant: Restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          info={restaurant}
          onClick={() => onClickRestaurantItem(restaurant)}
        />
      ))}
      {isBottomSheetOpened && (
        <RestaurantDetailBottomSheet
          restaurant={focusedRestaurant}
          close={closeModalHandler}
        />
      )}
    </St.Layout>
  );
}
