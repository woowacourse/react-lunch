import React, { Component, ReactNode } from 'react';
import {
  AlignFilter,
  CategoryFilter,
  Restaurant,
} from '../../types/restaurants';
import RestaurantDetailBottomSheet from '../RestaurantDetailBottomSheet';
import RestaurantItem from '../RestaurantItem';
import St from './styled';

interface RestaurantListProps {
  filterOptions: [CategoryFilter, AlignFilter];
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
    const restaurantList = await fetch('./mocks/mockData.json')
      .then((res) => res.json())
      .then((res: Restaurant[]) => alignBy('이름순', res));

    this.setState({ restaurantListOrigin: restaurantList, restaurantList });
  }

  componentDidUpdate(prevProps: Readonly<RestaurantListProps>): void {
    const [prevCategory, prevAlign] = prevProps.filterOptions;
    const [nextCategory, nextAlign] = this.props.filterOptions;

    if (prevCategory !== nextCategory) {
      this.filter();
    }

    if (prevCategory !== nextCategory || prevAlign !== nextAlign) {
      this.align();
    }
  }

  filter() {
    const [categoryFilter] = this.props.filterOptions;

    this.setState(({ restaurantListOrigin }) => ({
      restaurantList: filterBy(categoryFilter, restaurantListOrigin),
    }));
  }

  align() {
    const [_, alignFilter] = this.props.filterOptions;

    this.setState(({ restaurantList }) => ({
      restaurantList: alignBy(alignFilter, restaurantList),
    }));
  }

  focusRestaurant(focusedRestaurant: Restaurant) {
    this.setState({ focusedRestaurant, isOpened: true });
  }

  closeModal() {
    this.setState({ isOpened: false });
  }

  render(): ReactNode {
    const { restaurantList, focusedRestaurant, isOpened } = this.state;

    return (
      <St.Layout>
        {restaurantList.map((restaurant: Restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            info={restaurant}
            onClick={() => this.onClickRestaurantItem(restaurant)}
          />
        ))}
        {isOpened ? (
          <RestaurantDetailBottomSheet
            restaurant={focusedRestaurant!}
            close={this.closeModalHandler}
          />
        ) : null}
      </St.Layout>
    );
  }
}

export default RestaurantList;

const filterBy = (
  categoryFilter: CategoryFilter,
  restaurantList: Restaurant[]
) => {
  if (categoryFilter === '전체') return restaurantList;

  return restaurantList.filter(({ category }) => category === categoryFilter);
};

const alignBy = (alignFilter: AlignFilter, restaurantList: Restaurant[]) => {
  switch (alignFilter) {
    case '거리순':
      return restaurantList.sort((prev, next) => prev.distance - next.distance);

    case '이름순':
    default:
      return restaurantList.sort((prev, next) =>
        prev.title > next.title ? 1 : -1
      );
  }
};
