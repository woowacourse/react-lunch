import React, { useContext } from "react";
import styled from "styled-components";
import { convertImage } from "../utils/image";
import { RestaurantContext } from "../App";
import { Restaurant } from "../types/Restaurant";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = (props: RestaurantItemProps) => {
  const { state, setState } = useContext(RestaurantContext);
  const { name, distance, category, description } = props.restaurant;
  return (
    <>
      <Card
        onClick={() =>
          setState({
            ...state,
            modalOpen: true,
            modalInfo: { name, distance, category, description },
          })
        }>
        <Favorite></Favorite>
        <RestaurantInfo>
          <CategoryIcon>
            <img src={convertImage(category)} />
          </CategoryIcon>
          <article>
            <h3>{name}</h3>
            <p>캠퍼스부터 {distance}분 내</p>
            <p>{description}</p>
          </article>
        </RestaurantInfo>
      </Card>
    </>
  );
};

export default RestaurantItem;

const Card = styled.li`
  liststyle: none;
`;

const Favorite = styled.div``;
const RestaurantInfo = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;

  p:first-of-type {
    margin: 4px 0px;
    color: #ec4a0a;
  }

  article > h3 {
    margin: 0;
  }
`;

const CategoryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  margin-right: 16px;
  border-radius: 50%;
  background: #f6a88a;

  img {
    width: 36px;
    height: 36px;
  }
`;
