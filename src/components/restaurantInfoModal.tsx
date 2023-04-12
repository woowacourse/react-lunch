import { Component } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import { CATEGORY } from "../constants";
import { RestaurantInfo } from "../types";
import { $ } from "../utils/selector";

class RestaurantInfoModal extends Component<RestaurantInfo | any> {
  render() {
    const { selectedRestaurant: restaurant } = this.props;

    return (
      <>
        {ReactDom.createPortal(
          <dialog id="restaurant-detail">
            <ModalBackdrop
              className="modal-backdrop"
              onClick={this.props.onClose}
            ></ModalBackdrop>
            <Modal>
              <div className="category">
                <img
                  src={`../assets/category-${
                    CATEGORY[restaurant.category]
                  }.png`}
                  alt={restaurant.category}
                />
              </div>
              <div>
                <RestaurantName className="text-subtitle">
                  {restaurant.name}
                </RestaurantName>
                <RestaurantTakingTime className="text-body takingTime">
                  캠퍼스부터 {restaurant.takingTime}분 내
                </RestaurantTakingTime>
                <RestaurantDescription className="text-body">
                  {restaurant.description}
                </RestaurantDescription>
                <RestaurantLink href={restaurant.link} target="_blank">
                  {restaurant.link}
                </RestaurantLink>
              </div>
              <button
                type="button"
                className="text-caption close-btn"
                onClick={this.props.onClose}
              >
                닫기
              </button>
            </Modal>
          </dialog>,
          $("body")
        )}
      </>
    );
  }
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const Modal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  min-width: 100%;
  height: 60%;
  padding: 32px 16px;
  border: none;
  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const RestaurantName = styled.h3`
  margin-top: 16px;
`;

const RestaurantTakingTime = styled.p`
  margin: 16px 0;
`;

const RestaurantDescription = styled.p`
  color: var(--grey-500);
`;

const RestaurantLink = styled.a`
  display: block;
  margin: 16px 0 32px;
  text-decoration: underline;
  outline: none;
  cursor: pointer;
`;

export default RestaurantInfoModal;
