import { Component } from "react";
import ReactDom from "react-dom";
import { CATEGORY } from "../constants";
import { RestaurantInfo } from "../types";
import { $ } from "../utils/selector";

class RestaurantInfoModal extends Component<RestaurantInfo | any> {
  render() {
    const { selectedRestaurant: restaurant } = this.props;

    return (
      <>
        {ReactDom.createPortal(
          <dialog id="restaurant-detail">
            <img
              src={`../assets/category-${CATEGORY[restaurant.category]}.png`}
              alt={restaurant.category}
              className="category"
            />
            <div>
              <h3>{restaurant.name}</h3>
              <p>캠퍼스부터 {restaurant.takingTime}분 내</p>
              <p>{restaurant.description}</p>
              <p>{restaurant.link}</p>
            </div>
            <button type="button" className="text-caption">
              닫기
            </button>
          </dialog>,
          $("body")
        )}
      </>
    );
  }
}

export default RestaurantInfoModal;
