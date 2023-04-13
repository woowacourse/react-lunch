import { Component } from "react";
import styled from "styled-components";
import { ENGLISH_CATEGORY } from "../constants";
import { RestaurantItem } from "../types";

class Restaurant extends Component<RestaurantItem> {
  render() {
    const { restaurant: restaurantInfo } = this.props;

    return (
      <RestaurantContainer onClick={this.props.onClick}>
        <div className="category">
          <img
            src={`${process.env.PUBLIC_URL}/assets/category-${
              ENGLISH_CATEGORY[restaurantInfo.category]
            }.png`}
            alt={restaurantInfo.category}
          />
        </div>
        <article>
          <h3 className="text-subtitle">{restaurantInfo.name}</h3>
          <TakingTime className="text-body takingTime">
            캠퍼스부터 {restaurantInfo.takingTime}분 내
          </TakingTime>
          <Description className="text-body description">
            {restaurantInfo.description}
          </Description>
        </article>
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

const TakingTime = styled.p`
  margin: 2px 0 8px;
`;

const Description = styled.p`
  color: var(--grey-300);
`;

export default Restaurant;
