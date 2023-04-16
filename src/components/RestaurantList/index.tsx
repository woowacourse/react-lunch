import useModal from '../../hooks/@common/useModal';
import useRestaurantList from '../../hooks/restaurants/useRestaurantList';
import { FilterOptions, Restaurant } from '../../types/restaurants';
import RestaurantDetailBottomSheet from '../RestaurantDetailBottomSheet';
import RestaurantItem from '../RestaurantItem';
import St from './styled';

interface RestaurantListProps {
  filterOptions: FilterOptions;
}

export default function RestaurantList(props: RestaurantListProps) {
  const { filterOptions } = props;
  const { isOpened, focused, open, close } = useModal<Restaurant>(false);
  const { restaurantList } = useRestaurantList(filterOptions);

  return (
    <St.Layout data-cy="restaurant-list">
      {restaurantList.map((restaurant: Restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          info={restaurant}
          onClick={() => open(restaurant)}
        />
      ))}
      {isOpened && (
        <RestaurantDetailBottomSheet restaurant={focused} close={close} />
      )}
    </St.Layout>
  );
}
