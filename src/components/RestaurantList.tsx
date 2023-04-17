import RestaurantItem from './RestaurantItem';
import RestaurantManager from '../domain/RestaurantManager';
import { Category } from '../types/RestaurantDetail';

interface RestuarantListProps {
  category: Category;
  sort: string;
  onOpenModal: (event: React.MouseEvent<HTMLUListElement>) => void;
}

const RestaurantList = (props: RestuarantListProps) => {
  const { onOpenModal, category, sort } = props;

  return (
    <ul onClick={onOpenModal}>
      {RestaurantManager.getRestaurantListFilteredByOptions(category, sort).map(
        (itemDetail) => (
          <RestaurantItem
            key={itemDetail.id}
            detail={itemDetail}
          ></RestaurantItem>
        )
      )}
    </ul>
  );
};

export default RestaurantList;
