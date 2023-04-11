import { Component } from "react";
import { CATEGORY } from "../constants";
import { RestaurantInfo } from "../types";
import styled from "styled-components";

class Restaurant extends Component<RestaurantInfo> {
  render() {
    return (
      <RestaurantItem>
        <CategoryImage
          src={`../assets/category-${CATEGORY[this.props.category]}.png`}
          alt={this.props.category}
        />
        <div>
          <h3 className="text-subtitle">{this.props.name}</h3>
          <RestaurantTakingTime className="text-body">
            캠퍼스부터 {this.props.takingTime}분 내
          </RestaurantTakingTime>
          <RestaurantDescription className="text-body">
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

const CategoryImage = styled.img`
  height: 58px;
  padding: 10px;
  margin-right: 16px;
  border-radius: 50%;
  background: var(--lighten-color);
`;

const RestaurantTakingTime = styled.p`
  margin: 2px 0 8px;
  color: var(--primary-color);
`;

const RestaurantDescription = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default Restaurant;
