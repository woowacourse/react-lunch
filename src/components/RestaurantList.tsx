import { Component } from 'react';
import RestaurantItem from './RestaurantItem';

interface RestuarantListProps {
  filterOptions: {
    category: string;
    sort: string;
  };
}

export default class RestaurantList extends Component<RestuarantListProps> {
  constructor(props: RestuarantListProps) {
    super(props);
  }

  render() {
    return (
      <>
        <RestaurantItem
          detail={{
            category: '한식',
            name: '피양콩',
            distance: 10,
            description: '맛나용',
          }}
        ></RestaurantItem>
        {/* {RestaurantManager.getItemsBy(this.props.filterOptions).map((itemDetail) => (
          <RestaurantItem detail={itemDetail}></RestaurantItem>
        ))} */}
      </>
    );
  }
}
