import React, { Component, ReactNode } from "react";
import St from "./styled";
import CategoryImg from "../CategoryImg";
import { Restaurant } from "../../types/restaurants";

interface RestaurantItemProps {
  info: Restaurant;
  onClick(): void;
}
class RestaurantItem extends Component<RestaurantItemProps> {
  constructor(props: RestaurantItemProps) {
    super(props);
  }
  render(): ReactNode {
    const {
      info: { title, detail, distance, category },
      onClick,
    } = this.props;

    return (
      <St.Layout onClick={onClick}>
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
