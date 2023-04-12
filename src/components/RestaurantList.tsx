import { Component } from 'react';
import RestaurantItem from './RestaurantItem';
import RestaurantManager from '../domain/RestaurantManager';
import { Category } from '../types/RestaurantDetail';

interface RestuarantListProps {
  category: Category;
  sort: string;
}

export default class RestaurantList extends Component<RestuarantListProps> {
  constructor(props: RestuarantListProps) {
    super(props);
  }

  render() {
    const { category, sort } = this.props;

    return (
      <>
        {RestaurantManager.getRestaurantListFilteredByOptions(
          category,
          sort
        ).map((itemDetail) => (
          <RestaurantItem detail={itemDetail}></RestaurantItem>
        ))}
      </>
    );
  }
}
