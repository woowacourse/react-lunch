import { Component } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import { ENGLISH_CATEGORY } from "../constants";
import { RestaurantModal } from "../types";
import { $ } from "../utils/selector";

class RestaurantInfoModal extends Component<RestaurantModal> {
  render() {
    const { selectedRestaurant: restaurant } = this.props;

    return (
      <>
        {ReactDom.createPortal(
          <dialog ref={this.props.refModal}>
            <ModalBackdrop
              className="modal-backdrop"
              onClick={this.props.onClose}
            />
            <Modal>
              <div className="category">
                {restaurant && (
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/category-${
                      ENGLISH_CATEGORY[restaurant.category]
                    }.png`}
                    alt={restaurant.category}
                  />
                )}
              </div>
              <article>
                <Name className="text-subtitle">
                  {restaurant && restaurant.name}
                </Name>
                <TakingTime className="text-body takingTime">
                  캠퍼스부터 {restaurant && restaurant.takingTime}분 내
                </TakingTime>
                <Description className="text-body">
                  {restaurant && restaurant.description}
                </Description>
                {restaurant && (
                  <Link href={restaurant.link} target="_blank">
                    {restaurant && restaurant.link}
                  </Link>
                )}
              </article>
              <CloseButton
                type="button"
                className="text-caption"
                onClick={this.props.onClose}
              >
                닫기
              </CloseButton>
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
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
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

const Name = styled.h3`
  margin-top: 16px;
`;

const TakingTime = styled.p`
  margin: 16px 0;
`;

const Description = styled.p`
  color: var(--grey-500);
`;

const Link = styled.a`
  display: block;
  margin: 16px 0 32px;
  text-decoration: underline;
  outline: none;
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  bottom: 32px;
  width: calc(100% - 32px);
  height: 44px;
  padding: 10px 0px;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  outline: none;
  background: var(--primary-color);

  color: var(--grey-100);
  cursor: pointer;

  &:hover {
    border: 1px solid var(--darken-color);
    background: var(--darken-color);
  }

  &:active {
    bottom: 30px;
  }
`;

export default RestaurantInfoModal;
