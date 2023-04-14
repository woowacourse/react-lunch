import React, { useContext } from "react";
import styled from 'styled-components'
import { Restaurant } from "../types/Restaurant";
import { convertImage } from "../utils/image";
import { GlobalContext } from "../containers/GlobalProvider";
interface RestaurantItemProps {
  restaurant: Restaurant;
}

function RestaurantItem(
  { restaurant }: RestaurantItemProps
) {
  const globalState = useContext(GlobalContext);
  const { name, distance, category, description } = restaurant;

  const openModal = () => {
    globalState.setModalOpen(true);
    globalState.setRestaurant(restaurant);
  }

  return (
    <>
      <Card onClick={() => openModal()}>
        <Favorite>
        </Favorite>
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
  )
}

export default RestaurantItem;

const Card = styled.li`
list-style:none;
`;

const Favorite = styled.div`
`
const RestaurantInfo = styled.div`
display: flex;
align-items: flex-start;
padding: 16px 8px;
border-bottom: 1px solid #e9eaed;

p:first-of-type {
  margin: 4px 0px;
  color:#ec4a0a;
}

article > h3 {
  margin:0;
}
`

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
`