import CategoryIcon from "./CategoryIcon";
import ModalPortal from "./common/ModalPortal";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantDetailModal.module.css";

interface RestaurantDetailModalProps {
  restaurant: Restaurant;
  onClose: () => void;
}

const RestaurantDetailModal = (props: RestaurantDetailModalProps) => {
  const { restaurant, onClose } = props;
  const { name, category, distance, description, link } = restaurant;

  return (
    <ModalPortal onClose={onClose}>
      <div className={styles.container}>
        <CategoryIcon category={category} />
        <div className={styles.info}>
          <h2 className={`${styles.name} text-title`}>{name}</h2>
          <span className={`${styles.distance} text-body`}>캠퍼스부터 {distance}분 내</span>
          <p className={`${styles.description} text-body`}>{description}</p>
          <a href={link} className={styles.link} target="__blank">
            {link}
          </a>
        </div>
        <button type="button" className={`${styles.button} text-caption`} onClick={onClose}>
          닫기
        </button>
      </div>
    </ModalPortal>
  );
};

export default RestaurantDetailModal;
