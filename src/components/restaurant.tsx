import { Component } from "react";
import styled from "styled-components";
import { ENGLISH_CATEGORY } from "../constants";
import { RestaurantItem } from "../types";

class Restaurant extends Component<RestaurantItem> {
  render() {
    return (
      <RestaurantContainer onClick={this.props.onClick}>
        <div className="category">
          <img
            src={`../assets/category-${
              ENGLISH_CATEGORY[this.props.restaurant.category]
            }.png`}
            alt={this.props.restaurant.category}
          />
        </div>
        <div>
          <h3 className="text-subtitle">{this.props.restaurant.name}</h3>
          <RestaurantTakingTime className="text-body takingTime">
            캠퍼스부터 {this.props.restaurant.takingTime}분 내
          </RestaurantTakingTime>
          <RestaurantDescription className="text-body description">
            {this.props.restaurant.description}
          </RestaurantDescription>
        </div>
      </RestaurantContainer>
    );
  }
}

const RestaurantContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
  cursor: pointer;
`;

const RestaurantTakingTime = styled.p`
  margin: 2px 0 8px;
`;

const RestaurantDescription = styled.p`
  color: var(--grey-300);
`;

export default Restaurant;
