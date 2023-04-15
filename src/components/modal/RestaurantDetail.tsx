import styled from 'styled-components';
import { Style as RestaurantStyle } from '../restaurant/RestaurantItem';
import { imgSrc } from '../../constants';
import { Restaurant, RestaurantProps } from '../../type';

const Style = {
  ...RestaurantStyle,
  ImageWrapper: styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  `,
  RestaurantLink: styled.p`
    color: var(--grey-500);
  `,
  RestaurantDescription: styled.p`
    display: -webkit-box;
    padding-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    font: var(--lunch-body);
  `,
};

export function RestaurantDetail({ restaurant }: RestaurantProps) {
  return (
    <>
      <Style.ImageWrapper>
        <Style.RestaurantCategory>
          <img
            src={`${process.env.PUBLIC_URL}/images/category-${
              imgSrc[restaurant.category]
            }.png`}
            alt={restaurant.category}
          />
        </Style.RestaurantCategory>
      </Style.ImageWrapper>
      <Style.RestaurantName>{restaurant.name}</Style.RestaurantName>
      <Style.RestaurantDistance>
        캠퍼스로부터 {restaurant.distance}분 내
      </Style.RestaurantDistance>
      <Style.RestaurantDescription>
        {restaurant.description}
      </Style.RestaurantDescription>
      <a href={restaurant.link}>
        <Style.RestaurantLink>{restaurant.link}</Style.RestaurantLink>
      </a>
    </>
  );
}
