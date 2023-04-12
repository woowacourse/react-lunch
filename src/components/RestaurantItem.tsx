import { Component } from "react";
import RestaurantDetailModal from "./RestaurantDetailModal";
import CategoryIcon from "./CategoryIcon";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantItem.module.css";

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
          <CategoryIcon category={category} />
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
