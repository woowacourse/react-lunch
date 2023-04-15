import React, { useCallback, useState } from "react";
import { CATEGORY_ICONS } from "../constants/constants";
import Modal from "./Modal";
import type { Restaurant } from "../types/Restaurant";

type RestaurantItemProps = {
  restaurant: Restaurant;
};

const RestaurantItem = (props: RestaurantItemProps) => {
  const { storeName, category, distance, detail } = props.restaurant;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <li className="restaurant" onClick={showModal}>
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

      {isModalOpen && (
        <Modal restaurant={props.restaurant} closeModal={closeModal} />
      )}
    </>
  );
};

export default RestaurantItem;
