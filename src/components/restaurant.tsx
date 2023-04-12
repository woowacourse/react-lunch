import { Component } from "react";
import styled from "styled-components";
import { CATEGORY } from "../constants";
import { RestaurantInfo } from "../types";

class Restaurant extends Component<RestaurantInfo | any> {
  render() {
    return (
      <RestaurantItem onClick={this.props.onClick}>
        <div className="category">
          <img
            src={`../assets/category-${CATEGORY[this.props.category]}.png`}
            alt={this.props.category}
          />
        </div>
        <div>
          <h3 className="text-subtitle">{this.props.name}</h3>
          <RestaurantTakingTime className="text-body takingTime">
            캠퍼스부터 {this.props.takingTime}분 내
          </RestaurantTakingTime>
          <RestaurantDescription className="text-body description">
            {this.props.description}
          </RestaurantDescription>
        </div>
      </RestaurantItem>
    );
  }
}

const RestaurantItem = styled.li`
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
