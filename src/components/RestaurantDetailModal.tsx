import { Component } from "react";
import ModalPortal from "./common/ModalPortal";
import getCategoryImage from "../assets/images/category";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantDetailModal.module.css";

interface Props {
  restaurant: Restaurant;
  onClose: () => void;
}

class RestaurantDetailModal extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { restaurant } = this.props;

    return (
      <ModalPortal onClose={this.props.onClose}>
        <div className={styles.container}>
          <div className={styles.category}>
            <img src={getCategoryImage(restaurant.category)} alt={restaurant.category} className="category-icon" />
          </div>
          <div className={styles.info}>
            <h2 className={`${styles.name} text-title`}>{restaurant.name}</h2>
            <span className={`${styles.distance} text-body`}>캠퍼스부터 {restaurant.distance}분 내</span>
            <p className={`${styles.description} text-body`}>
              {restaurant.description ?? "현재 음식점에 대한 설명이 없습니다."}
            </p>
            <a href={restaurant.link} className={styles.link} target="__blank">
              {restaurant.link}
            </a>
          </div>
          <button type="button" className={`${styles.button} text-caption`} onClick={this.props.onClose}>
            닫기
          </button>
        </div>
      </ModalPortal>
    );
  }
}

export default RestaurantDetailModal;
