import React from "react";
import styled from 'styled-components'
import { Restaurant } from "../types/Restaurant";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

class RestaurantItem extends React.Component<RestaurantItemProps> {

  render() {
    const { name, distance, description } = this.props.restaurant;

    return (
      <Card>
        <Favorite />
        <div className="restaurant">
          <div className="restaurant__category">
            <img
              src="./category-${TRANSLATE_CATEGORY[category]}.png"
              alt="이미지"
              className="category-icon"
            />
          </div>
          <RestaurantInfo>
            <RestaurantName>{name}</RestaurantName>
            <RestaurantDistance>
              캠퍼스부터 {distance}분 내
            </RestaurantDistance>
            <RestaurantDescription>
              {description}
            </RestaurantDescription>
          </RestaurantInfo>
        </div>
      </Card>
    )
  }
}

export default RestaurantItem;

const Card = styled.li`
display: flex;
align-items: flex-start;
padding: 16px 8px;
border-bottom: 1px solid #e9eaed;
`;

const Favorite = styled.div`
`
const RestaurantInfo = styled.div`
`
const RestaurantName = styled.div`
`
const RestaurantDescription = styled.div`
`
const RestaurantDistance = styled.div`
`
