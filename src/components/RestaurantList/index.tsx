import React, { Component, ReactNode } from 'react';
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

interface State {
  restaurantListOrigin: Restaurant[];
  restaurantList: Restaurant[];
  isOpened: boolean;
  focusedRestaurant: Restaurant | null;
}

class RestaurantList extends Component<RestaurantListProps, State> {
  state = {
    restaurantListOrigin: [],
    restaurantList: [],
    isOpened: false,
    focusedRestaurant: null,
  };

  onClickRestaurantItem: (restaurant: Restaurant) => void;
  closeModalHandler: VoidFunction;

  constructor(props: RestaurantListProps) {
    super(props);

    this.onClickRestaurantItem = this.focusRestaurant.bind(this);
    this.closeModalHandler = this.closeModal.bind(this);
  }

  async componentDidMount() {
    const restaurantList = await fetchMockRestaurants({ align: BY_NAME });

    this.setState({ restaurantListOrigin: restaurantList, restaurantList });
  }

  componentDidUpdate(prevProps: Readonly<RestaurantListProps>): void {
    const { category: prevCategory, align: prevAlign } =
      prevProps.filterOptions;
    const { category: nextCategory, align: nextAlign } =
      this.props.filterOptions;

    if (prevCategory !== nextCategory) this.filter();
    if (prevCategory !== nextCategory || prevAlign !== nextAlign) this.align();
  }

  filter() {
    const { category } = this.props.filterOptions;

    this.setState(({ restaurantListOrigin }) => ({
      restaurantList: filterBy(category, restaurantListOrigin),
    }));
  }

  align() {
    const { align } = this.props.filterOptions;

    this.setState(({ restaurantList }) => ({
      restaurantList: alignBy(align, restaurantList),
    }));
  }

  focusRestaurant(focusedRestaurant: Restaurant) {
    this.setState({ focusedRestaurant, isOpened: true });
  }

  closeModal() {
    this.setState({ focusedRestaurant: null, isOpened: false });
  }

  render(): ReactNode {
    const { restaurantList, focusedRestaurant, isOpened } = this.state;
    const isBottomSheetOpened = isOpened && focusedRestaurant;

    return (
      <St.Layout data-cy="restaurant-list">
        {restaurantList.map((restaurant: Restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            info={restaurant}
            onClick={() => this.onClickRestaurantItem(restaurant)}
          />
        ))}
        {isBottomSheetOpened && (
          <RestaurantDetailBottomSheet
            restaurant={focusedRestaurant}
            close={this.closeModalHandler}
          />
        )}
      </St.Layout>
    );
  }
}

export default RestaurantList;
