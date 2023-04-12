import { PureComponent } from 'react';
import RestaurantItem from './RestaurantItem';
import RestaurantManager from '../domain/RestaurantManager';
import { Category } from '../types/RestaurantDetail';

interface RestuarantListProps {
  category: Category;
  sort: string;
  onOpenModal: (event: React.MouseEvent<HTMLUListElement>) => void;
}

export default class RestaurantList extends PureComponent<RestuarantListProps> {
  constructor(props: RestuarantListProps) {
    super(props);
  }

  render() {
    const { onOpenModal, category, sort } = this.props;

    return (
      <ul onClick={onOpenModal}>
        {RestaurantManager.getRestaurantListFilteredByOptions(
          category,
          sort
        ).map((itemDetail) => (
          <RestaurantItem
            key={itemDetail.id}
            detail={itemDetail}
          ></RestaurantItem>
        ))}
      </ul>
    );
  }
}
