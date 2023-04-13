import { Component } from "react";
import CategoryIcon from "./CategoryIcon";
import ModalPortal from "./common/ModalPortal";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantDetailModal.module.css";

interface Props {
  restaurant: Restaurant;
  onClose: () => void;
}

class RestaurantDetailModal extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onKeydown = this.onKeydown.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeydown);
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.props.onClose();
    }
  }

  render() {
    const { name, category, distance, description, link } = this.props.restaurant;

    return (
      <ModalPortal onClose={this.props.onClose}>
        <div className={styles.container}>
          <CategoryIcon category={category} />
          <div className={styles.info}>
            <h2 className={`${styles.name} text-title`}>{name}</h2>
            <span className={`${styles.distance} text-body`}>캠퍼스부터 {distance}분 내</span>
            <p className={`${styles.description} text-body`}>{description ?? "현재 음식점에 대한 설명이 없습니다."}</p>
            <a href={link} className={styles.link} target="__blank">
              {link}
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
