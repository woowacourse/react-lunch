import React from "react";
import { CATEGORY_ICONS } from "../constants/constants";
import Modal from "./Modal";
import type { Restaurant } from "../types/Restaurant";

type RestaurantItemProps = {
  restaurant: Restaurant;
};

type RestaurantItemState = {
  isModalOpen: boolean;
};

class RestaurantItem extends React.Component<
  RestaurantItemProps,
  RestaurantItemState
> {
  constructor(props: RestaurantItemProps) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  render() {
    const { storeName, category, distance, detail } = this.props.restaurant;

    return (
      <>
        <li className="restaurant" onClick={this.showModal}>
          <div className="restaurant__category">
            <img
              src={CATEGORY_ICONS[category]}
              alt={category}
              className="category-icon"
            />
          </div>
          <div className="restaurant__info">
            <h3 className="restaurant__name text-subtitle">{storeName}</h3>
            <span className="restaurant__distance text-body">
              캠퍼스부터 {distance}분 내
            </span>
            <p className="restaurant__description text-body">{detail}</p>
          </div>
        </li>

        {this.state.isModalOpen && (
          <Modal
            restaurant={this.props.restaurant}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }

  showModal() {
    this.setState({
      isModalOpen: true,
    });

    console.log(this.state.isModalOpen);
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
    });

    console.log(this.state.isModalOpen);
  }
}

export default RestaurantItem;
