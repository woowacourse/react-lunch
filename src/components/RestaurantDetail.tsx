import { Restaurant } from "../types/restaurant";
import React from "react";
import styled from "styled-components";
import { CATEGORY_IMAGE_MAP } from "../constants";

interface Props {
  restaurant: Restaurant;
}

class RestaurantDetail extends React.Component<Props> {
  render() {
    const {
      category,
      name,
      distance,
      description,
      link,
    } = this.props.restaurant;

    return (
      <StyledDiv>
        <div className="modal-backdrop"></div>
        <div className="modal-container">
          <div className="detail">
            <div className="restaurant__category">
              <img
                src={`./img/${CATEGORY_IMAGE_MAP[category]}`}
                alt={category}
                className="category-icon"
              />
            </div>
            <h2 className="restaurant__name text-subtitle">{name}</h2>
            <p className="restaurant__take-minute text-body">
              캠퍼스부터 {distance}분 내
            </p>
            <textarea>{description}</textarea>
            <div className="link-area">
              <a href={link}>{link}</a>
            </div>
            <div className="button-container">
              <button className="secondary">삭제하기</button>
              <button className="primary">닫기</button>
            </div>
          </div>
        </div>
      </StyledDiv>
    );
  }
}

export default RestaurantDetail;

const StyledDiv = styled.div`
  .modal {
    display: none;
  }

  .modal--open {
    display: block;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.35);
  }

  .modal-container {
    position: fixed;
    bottom: 0;
    width: 100%;

    padding: 32px 16px;

    border-radius: 8px 8px 0px 0px;
    background: var(--grey-100);
  }

  .modal-title {
    margin-bottom: 36px;
  }

  .detail {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 608px;
  }

  .detail .favorite-icon {
    position: absolute;
    right: 8px;
  }

  .detail h2 {
    font-weight: 600;
    font-size: 20px;
  }

  .detail .restaurant__take-minute {
    color: #ec4a0a;
  }

  .detail textarea {
    resize: none;

    border: none;
    height: 240px;

    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }

  .detail .link-area a {
    height: 24px;
    color: #000000;
  }

  .button-container {
    display: flex;
  }

  button {
    width: 100%;
    height: 44px;

    margin-right: 16px;

    border: none;
    border-radius: 8px;

    font-weight: 600;
    cursor: pointer;
  }

  button:last-child {
    margin-right: 0;
  }

  button.primary {
    background: var(--primary-color);

    color: var(--grey-100);
  }

  button.secondary {
    border: 1px solid var(--grey-300);
    background: transparent;

    color: var(--grey-300);
  }
`;
