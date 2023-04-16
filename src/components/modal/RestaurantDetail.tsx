import styled from 'styled-components';
import theme from '../../styles/theme';
import { RestaurantCategoryImage } from '../restaurant/RestaurantCategoryImage';
import { Style as RestaurantStyle } from '../restaurant/RestaurantItem';
import { Restaurant } from '../../type';

const Style = {
  ...RestaurantStyle,
  ImageWrapper: styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  `,
  RestaurantLink: styled.p`
    color: ${theme.color.grey500};
  `,
  RestaurantDescription: styled.p`
    display: -webkit-box;
    padding-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    font: ${theme.font.body};
  `,
};

export interface RestaurantDetailProps {
  restaurant: Restaurant;
}

export function RestaurantDetail({ restaurant }: RestaurantDetailProps) {
  const { category, name, distance, description, link } = restaurant;
  return (
    <>
      <Style.ImageWrapper>
        <RestaurantCategoryImage category={category} />
      </Style.ImageWrapper>
      <Style.RestaurantName>{name}</Style.RestaurantName>
      <Style.RestaurantDistance>
        캠퍼스로부터 {distance}분 내
      </Style.RestaurantDistance>
      <Style.RestaurantDescription>{description}</Style.RestaurantDescription>
      {link && (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <Style.RestaurantLink>{link}</Style.RestaurantLink>
        </a>
      )}
    </>
  );
}
