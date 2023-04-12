import React, { Component, PropsWithChildren, ReactNode } from 'react';
import St from './styled';
import CategoryImg from '../CategoryImg';

type Category = '한식' | '중식' | '일식' | '양식' | '아시안' | '기타';
export interface Restaurant {
  id: number;
  title: string;
  category: Category;
  detail: string;
  distance: number;
  link: string;
}

interface RestaurantItemProps {
  info: Restaurant;
}
class RestaurantItem extends Component<PropsWithChildren<RestaurantItemProps>> {
  constructor(props: PropsWithChildren<RestaurantItemProps>) {
    super(props);
  }
  render(): ReactNode {
    const {
      info: { title, detail, distance, category },
    } = this.props;

    return (
      <St.Layout>
        <St.LeftSection>
          <CategoryImg category={category} />
        </St.LeftSection>
        <St.RightSection>
          <St.Title>{title}</St.Title>
          <St.Distance>캠퍼스 부터 {distance}분</St.Distance>
          <St.Detail>{detail}</St.Detail>
        </St.RightSection>
      </St.Layout>
    );
  }
}

export default RestaurantItem;
