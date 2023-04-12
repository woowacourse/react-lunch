import React, { Component, PropsWithChildren, ReactNode } from 'react';
import RestaurantItem from '../RestaurantItem';
import St from './styled';

type Category = '한식' | '중식' | '일식' | '양식' | '아시안' | '기타';
export interface Restaurant {
  id: number;
  title: string;
  category: Category;
  detail: string;
  distance: number;
  link: string;
}

interface State {
  restaurantList: Restaurant[];
}
class RestaurantList extends Component<PropsWithChildren, State> {
  state = { restaurantList: [] };
  componentDidMount(): void {
    fetch('./mocks/mockData.json')
      .then((res) => res.json())
      .then((res: Restaurant[]) => this.setState({ restaurantList: res }));
  }

  render(): ReactNode {
    const { restaurantList } = this.state;

    return (
      <St.Layout>
        {restaurantList.map((restaurant: Restaurant) => (
          <RestaurantItem key={restaurant.id} info={restaurant} />
        ))}
      </St.Layout>
    );
  }
}

export default RestaurantList;
