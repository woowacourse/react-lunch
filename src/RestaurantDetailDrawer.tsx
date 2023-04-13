import React from 'react';
import Drawer from './Drawer.tsx';
import { Restaurant } from './type.js';
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
  constructor(props) {
    super(props);
    const restaurantList = JSON.parse(localStorage.getItem('restaurantList'));

    const emptyObj = {
      title: '',
      category: '',
      distance: '',
      description: '',
      link: '',
    };
    this.state = {
      restaurant:
        restaurantList.find(
          (restaurant) => +restaurant.id === props.restaurantId
        ) ?? emptyObj,
    };
  }

  // TODO: 메서드 분리, NO select ID에 따른 페이지 분리
  componentDidUpdate(prevProps:RestaurantDetailDrawerProps): void {
    if (this.props.restaurantId !== prevProps.restaurantId) {
      const emptyObj = {
        title: '오류가 발생했습니다.',
        category: '',
        distance: '',
        description: '',
        link: '',
      };

      const restaurantList = JSON.parse(localStorage.getItem('restaurantList'));
      
      this.setState({
        restaurant:
          restaurantList.find(
            (restaurant) => +restaurant.id === +this.props.restaurantId
          ) ?? emptyObj,
      });
    }
  }

  render() {
    return (
      <Drawer isOpenDrawer={this.props.isOpenDrawer}>
        {/* <img src={asianImg} alt='한식' className='category-icon' /> */}
        <h3 className="restaurant__name text-subtitle">
          {this.state.restaurant.title}
        </h3>
        <span className="restaurant__distance text-body">
          캠퍼스로부터 {this.state.restaurant.distance}분 내
        </span>
        <p className="restaurant__description text-body">
          {this.state.restaurant.description}
        </p>
        <p className="restaurant__link text-body">
          {this.state.restaurant.link ?? ''}
        </p>
        <button
          type="button"
          className="button button--secondary text-caption"
          onClick={() => this.props.onToggleDrawer()}
        >
          취소하기
        </button>
      </Drawer>
    );
  }
}

export default RestaurantDetailDrawer;
