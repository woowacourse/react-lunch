import { Component } from "react";

import getCategoryImage from "../assets/images/category";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantItem.module.css";
import RestaurantDetailModal from "./RestaurantDetailModal";

interface Props {
  restaurant: Restaurant;
}

interface State {
  isModalOpen: boolean;
}

class RestaurantItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  onClick() {
    this.setState({ isModalOpen: true });
  }

  onClose() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { name, category, distance, description } = this.props.restaurant;

    return (
      <>
        <li className={styles.restaurant} onClick={this.onClick.bind(this)}>
          <div className={styles.category}>
            <img src={getCategoryImage(category)} alt={category} className={styles.categoryIcon} />
          </div>
          <div className={styles.info}>
            <h3 className={`${styles.name} text-subtitle`}>{name}</h3>
            <span className={`${styles.distance} text-body`}>캠퍼스부터 {distance}분 내</span>
            <p className={`${styles.description} text-body`}>{description}</p>
          </div>
        </li>
        {this.state.isModalOpen && (
          <RestaurantDetailModal restaurant={this.props.restaurant} onClose={this.onClose.bind(this)} />
        )}
      </>
    );
  }
}

export default RestaurantItem;
