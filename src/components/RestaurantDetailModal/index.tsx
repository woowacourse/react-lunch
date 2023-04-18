import "./index.css";
import { RestaurantDetailModalProps } from "./type";
import { CategoryImagePath } from "../../data/CategoryImagePath";
import ModalContainer from "../ModalContainer";

const RestaurantDetailModal = (props: RestaurantDetailModalProps) => {
  const { closeModal, restaurant } = props;
  const { name, category, distance, description, link } = restaurant;

  return (
    <ModalContainer closeModal={props.closeModal}>
      <div className="restaurant-detail-container">
        <div className="category-and-favorite">
          <div className="restaurant__category">
            <img src={CategoryImagePath[category]} alt={category} className="category-icon" />
          </div>
        </div>
        <h3 className="restaurant__name text-subtitle detail-subtitle">{name}</h3>
        <span className="restaurant__distance text-body">캠퍼스부터 {distance}분 내</span>
        <p className="restaurant__description text-body">{description}</p>
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
        <div className="button-container">
          <button
            id="detail-cancel-button"
            className="button button--primary text-caption"
            onClick={closeModal}
          >
            닫기
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default RestaurantDetailModal;
