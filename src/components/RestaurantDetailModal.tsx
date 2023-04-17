import { Component, useEffect } from "react";
import CategoryIcon from "./CategoryIcon";
import ModalPortal from "./common/ModalPortal";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantDetailModal.module.css";

interface Props {
  restaurant: Restaurant;
  onClose: () => void;
}

const RestaurantDetailModal = (props: Props) => {
  const { name, category, distance, description, link } = props.restaurant;

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        props.onClose();
      }
    };

    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, []);

  return (
    <ModalPortal onClose={props.onClose}>
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
        <button type="button" className={`${styles.button} text-caption`} onClick={props.onClose}>
          닫기
        </button>
      </div>
    </ModalPortal>
  );
};

export default RestaurantDetailModal;
