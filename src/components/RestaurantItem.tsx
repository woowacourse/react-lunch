import { useState } from "react";
import RestaurantDetailModal from "./RestaurantDetailModal";
import CategoryIcon from "./CategoryIcon";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantItem.module.css";

interface Props {
  restaurant: Restaurant;
}

const RestaurantItem = (props: Props) => {
  const { name, category, distance, description } = props.restaurant;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={styles.restaurant} onClick={onClick.bind(this)}>
        <CategoryIcon category={category} />
        <div className={styles.info}>
          <h3 className={`${styles.name} text-subtitle`}>{name}</h3>
          <span className={`${styles.distance} text-body`}>캠퍼스부터 {distance}분 내</span>
          <p className={`${styles.description} text-body`}>{description}</p>
        </div>
      </li>
      {isModalOpen && <RestaurantDetailModal restaurant={props.restaurant} onClose={onClose.bind(this)} />}
    </>
  );
};

export default RestaurantItem;
