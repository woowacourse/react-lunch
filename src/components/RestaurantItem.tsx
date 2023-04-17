import RestaurantDetailModal from "./RestaurantDetailModal";
import CategoryIcon from "./CategoryIcon";
import type { Restaurant } from "../types/restaurant";

import styles from "./RestaurantItem.module.css";
import useModal from "../hooks/useModal";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { name, category, distance, description } = restaurant;

  return (
    <>
      <li className={styles.restaurant} onClick={openModal}>
        <CategoryIcon category={category} />
        <div className={styles.info}>
          <h3 className={`${styles.name} text-subtitle`}>{name}</h3>
          <span className={`${styles.distance} text-body`}>캠퍼스부터 {distance}분 내</span>
          <p className={`${styles.description} text-body`}>{description}</p>
        </div>
      </li>
      {isModalOpen && <RestaurantDetailModal restaurant={restaurant} onClose={closeModal} />}
    </>
  );
};

export default RestaurantItem;
