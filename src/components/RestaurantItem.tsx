import { Restaurant } from "../types/restaurant";

import React from "react";
import styled from "styled-components";

import { CATEGORY_IMAGE_MAP } from "../constants";

const StyledLi = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;

  cursor: pointer;

  .restaurant__category {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;

    margin-right: 16px;

    border-radius: 50%;
    background: var(--lighten-color);
  }

  .category-icon {
    width: 36px;
    height: 36px;
  }

  .restaurant__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .restaurant__name {
    margin: 0;
  }

  .restaurant__distance {
    color: var(--primary-color);
  }

  .restaurant__description {
    display: -webkit-box;

    padding-top: 8px;

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

interface Props {
  restaurant: Restaurant;
}

class RestaurantItem extends React.Component<Props> {
  render() {
    const { id, name, category, distance, description } = this.props.restaurant;

    return (
      <StyledLi id={id}>
        <div className="restaurant__category">
          <img
            src={`./img/${CATEGORY_IMAGE_MAP[category]}`}
            alt={category}
            className="category-icon"
          />
        </div>
        <div className="restaurant__info">
          <h3 className="restaurant__name text-subtitle">{name}</h3>
          <span className="restaurant__distance text-body">
            캠퍼스부터 {distance}분 내
          </span>
          <p className="restaurant__description text-body">{description}</p>
        </div>
      </StyledLi>
    );
  }
}

export default RestaurantItem;
