import React from "react";
import St from "./styled";
import CategoryImg from "../CategoryImg";
import { Restaurant } from "../../types/restaurants";

interface RestaurantItemProps {
  info: Restaurant;
  onClick(): void;
}
export default function RestaurantItem({
  info: { title, detail, distance, category },
  onClick,
}: RestaurantItemProps) {
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
