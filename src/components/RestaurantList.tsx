import { RestaurantItem } from './RestaurantItem';
import RestaurantManager from '../domain/RestaurantManager';
import { Category } from '../types/RestaurantDetail';

interface RestaurantListProps {
  category: Category;
  sort: string;
  onOpenModal: (event: React.MouseEvent<HTMLUListElement>) => void;
}

export const RestaurantList = ({
  category,
  sort,
  onOpenModal,
}: RestaurantListProps) => {
  return (
    <ul onClick={onOpenModal}>
      {RestaurantManager.getRestaurantListFilteredByOptions(category, sort).map(
        (itemDetail) => (
          <RestaurantItem
            key={itemDetail.id}
            itemDetail={itemDetail}
          ></RestaurantItem>
        )
      )}
    </ul>
  );
};
