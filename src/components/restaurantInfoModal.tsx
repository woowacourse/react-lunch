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
          <>
            <InfoModal id="restaurant-detail">
              <img
                src={`../assets/category-${CATEGORY[restaurant.category]}.png`}
                alt={restaurant.category}
                className="category"
              />
              <div>
                <RestaurantName className="text-subtitle">
                  {restaurant.name}
                </RestaurantName>
                <RestaurantTakingTime className="text-body takingTime">
                  캠퍼스부터 {restaurant.takingTime}분 내
                </RestaurantTakingTime>
                <RestaurantDescription className="text-body description">
                  {restaurant.description}
                </RestaurantDescription>
                <RestaurantLink>{restaurant.link}</RestaurantLink>
              </div>
              <button type="button" className="text-caption close-btn">
                닫기
              </button>
            </InfoModal>
          </>,
          $("body")
        )}
      </>
    );
  }
}

const InfoModal = styled.dialog`
  min-width: 100%;
  height: 60%;
  margin: auto 0 0;
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

const RestaurantLink = styled.p`
  margin: 16px 0 32px;
  text-decoration: underline;
`;

export default RestaurantInfoModal;
