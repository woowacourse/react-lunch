import "./index.css";
import { CategoryImagePath } from "../../data/CategoryImagePath";
import useModal from "../../hooks/useModal";
import RestaurantDetailModal from "../RestaurantDetailModal";
import { RestaurantItemProps } from "./type";

const RestaurantItem = (props: RestaurantItemProps) => {
  const { restaurant } = props;
  const { name, category, description, distance } = restaurant;
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <li className="restaurant" onClick={openModal}>
        <div className="restaurant__category">
          <img src={CategoryImagePath[category]} alt={category} className="category-icon" />
        </div>
        <div className="restaurant__info">
          <h3 className="restaurant__name text-subtitle">{name}</h3>
          <span className="restaurant__distance text-body">캠퍼스부터 {distance}분 내</span>
          <p className="restaurant__description text-body">{description}</p>
        </div>
      </li>
      {isModalOpen && <RestaurantDetailModal restaurant={restaurant} closeModal={closeModal} />}
    </>
  );
};

export default RestaurantItem;
