import "./index.css";
import { Component } from "react";
import { CategoryImagePath } from "../../data/CategoryImagePath";
import { Restaurant } from "../../types/restaurant";

interface RestaurantItemProps {
  restaurant: Restaurant;
  onClickRestaurantItem: () => void;
}

const RestaurantItem = ({ restaurant, onClickRestaurantItem }: RestaurantItemProps) => {
  const { name, category, description, distance } = restaurant;

  const handleClickRestaurantItem = () => {
    onClickRestaurantItem();
  };

  return (
    <li className="restaurant" onClick={handleClickRestaurantItem}>
      <div className="restaurant__category">
        <img src={CategoryImagePath[category]} alt={category} className="category-icon" />
      </div>
      <div className="restaurant__info">
        <h3 className="restaurant__name text-subtitle">{name}</h3>
        <span className="restaurant__distance text-body">캠퍼스부터 {distance}분 내</span>
        <p className="restaurant__description text-body">{description}</p>
      </div>
    </li>
  );
};

export default RestaurantItem;
