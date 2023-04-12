import React from "react";
import styled from 'styled-components'
import { Restaurant } from "../types/Restaurant";
import asianImage from "../assets/images/category-asian.png";
import chineseImage from "../assets/images/category-chinese.png";
import koreanImage from "../assets/images/category-korean.png";
import japaneseImage from "../assets/images/category-japanese.png";
import westernImage from "../assets/images/category-western.png";
import etcImage from '../assets/images/category-etc.png';
interface RestaurantItemProps {
  restaurant: Restaurant;
}

class RestaurantItem extends React.Component<RestaurantItemProps> {

  convertImage(image: string) {
    switch (image) {
      case "asian":
        return asianImage;
      case "korean":
        return koreanImage;
      case "japanese":
        return japaneseImage;
      case "western":
        return westernImage;
      case "chinese":
        return chineseImage;
      default:
        return etcImage;
    }
  }

  render() {
    const { name, distance, category, description } = this.props.restaurant;

    return (
      <Card>
        <Favorite>
        </Favorite>
        <RestaurantInfo>
          <CategoryIcon>
            <img src={this.convertImage(category)} />
          </CategoryIcon>
          <article>
            <h3>{name}</h3>
            <p>캠퍼스부터 {distance}분 내</p>
            <p>{description}</p>
          </article>
        </RestaurantInfo>
      </Card>
    )
  }
}

export default RestaurantItem;

const Card = styled.li`
listStyle:none;
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
  color:red;
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

const RestaurantName = styled.div`
`
const RestaurantDescription = styled.div`
`
const RestaurantDistance = styled.div`
`
