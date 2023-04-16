import styled from "styled-components";
import { ENGLISH_CATEGORY } from "../constants";
import { RestaurantInfo } from "../types";

interface Props {
  restaurant: RestaurantInfo;
  onClick: () => void;
}

const Restaurant = ({ restaurant, onClick }: Props) => {
  return (
    <RestaurantContainer onClick={onClick}>
      <div className="category">
        <img
          src={`${process.env.PUBLIC_URL}/assets/category-${
            ENGLISH_CATEGORY[restaurant.category]
          }.png`}
          alt={restaurant.category}
        />
      </div>
      <article>
        <h3 className="text-subtitle">{restaurant.name}</h3>
        <TakingTime className="text-body takingTime">
          캠퍼스부터 {restaurant.takingTime}분 내
        </TakingTime>
        <Description className="text-body description">
          {restaurant.description}
        </Description>
      </article>
    </RestaurantContainer>
  );
};

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
