import styled from 'styled-components';
import { Style as RestaurantStyle } from '../restaurant/RestaurantItem';
import { imgSrc } from '../../constants';
import { RestaurantProps } from '../../type';

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

export function RestaurantDetail({
  info: { category, name, distance, description, link },
}: RestaurantProps) {
  return (
    <>
      <Style.ImageWrapper>
        <Style.RestaurantCategory>
          <img
            src={`${process.env.PUBLIC_URL}/images/category-${imgSrc[category]}.png`}
            alt={category}
          />
        </Style.RestaurantCategory>
      </Style.ImageWrapper>
      <Style.RestaurantName>{name}</Style.RestaurantName>
      <Style.RestaurantDistance>
        캠퍼스로부터 {distance}분 내
      </Style.RestaurantDistance>
      <Style.RestaurantDescription>{description}</Style.RestaurantDescription>
      {link && (
        <a href={link}>
          <Style.RestaurantLink>{link}</Style.RestaurantLink>
        </a>
      )}
    </>
  );
}
