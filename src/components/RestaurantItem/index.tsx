import "./index.css";
import { Component } from "react";
import { CategoryImagePath } from "../../data/CategoryImagePath";
import { Restaurant } from "../../types/restaurant";

interface RestaurantItemProps {
  restaurant: Restaurant;
  setModalContents: (restaurant: Restaurant) => void;
  openModal: () => void;
}

export default class RestaurantItem extends Component<RestaurantItemProps> {
  onClickRestaurantItem() {
    const { restaurant, setModalContents, openModal } = this.props;

    setModalContents(restaurant);
    openModal();
  }

  render() {
    const { name, category, description, distance } = this.props.restaurant;

    return (
      <li className="restaurant" onClick={this.onClickRestaurantItem.bind(this)}>
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
  }
}
