import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from './common/Drawer.tsx';
import { Restaurant } from './util/type.js';
import { CATEGORY_IMAGES, NO_EXIST_RESTAURANT } from './util/constant.ts';

type RestaurantDetailDrawerProps = {
  isOpenDrawer: boolean;
  restaurantId: number;
  onToggleDrawer: (id?: number) => void;
};

type RestaurantDetailDrawerState = {
  restaurant: Omit<Restaurant, "id">;
}

class RestaurantDetailDrawer extends React.Component<
  RestaurantDetailDrawerProps,
  RestaurantDetailDrawerState
> {
  drawerContainer: HTMLDivElement = document.createElement('div');

  constructor(props) {
    super(props);
    this.state = {
      restaurant: this.fetchRestaurantById()
    };
  }

    componentDidUpdate(prevProps: RestaurantDetailDrawerProps): void {
    if (this.props.restaurantId !== prevProps.restaurantId) {
      this.setState({
        restaurant: this.fetchRestaurantById()
      });
    }
  }

  componentDidMount() {
    const modalHook = document.getElementById('modal-hook');
    if (modalHook) {
      modalHook.appendChild(this.drawerContainer);
    }
  }

  fetchRestaurantById() {
    const rawRestaurantList = localStorage.getItem('restaurantList');
    if (!rawRestaurantList) return NO_EXIST_RESTAURANT;
    const restaurantList = JSON.parse(rawRestaurantList);
    return (
      restaurantList.find(
        (restaurant: Restaurant) => +restaurant.id === +this.props.restaurantId
      ) ?? NO_EXIST_RESTAURANT
    );
  }

  render() {
    return ReactDOM.createPortal(
      <Drawer isOpenDrawer={this.props.isOpenDrawer}>
        <div className='restaurant__category'>
          <img
            src={CATEGORY_IMAGES[this.state.restaurant.category]}
            alt={this.state.restaurant.category}
            className='category-icon'
          />
        </div>
        <h3 className='restaurant__name text-subtitle'>
          {this.state.restaurant.title}
        </h3>
        <span className='restaurant__distance text-body'>
          캠퍼스로부터 {this.state.restaurant.distance}분 내
        </span>
        <p className='text-body'>{this.state.restaurant.description}</p>
        <p className='restaurant__link text-body'>
          {this.state.restaurant.link ?? ''}
        </p>
        <button
          type='button'
          className='button button--secondary text-caption'
          onClick={() => this.props.onToggleDrawer()}
        >
          취소하기
        </button>
      </Drawer>,
      this.drawerContainer
    );
  }
}

export default RestaurantDetailDrawer;
