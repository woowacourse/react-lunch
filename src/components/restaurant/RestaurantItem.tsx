import styled from 'styled-components';
import theme from '../../styles/theme';
import { RestaurantCategoryImage } from './RestaurantCategoryImage';
import { Restaurant } from '../../type';

export const Style = {
  Wrapper: styled.li`
    display: flex;
    align-items: flex-start;
    padding: 16px 8px;
    border-bottom: 1px solid #e9eaed;
    cursor: pointer;
  `,

  RestaurantInfo: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  `,

  DescriptionWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  RestaurantName: styled.h3`
    font: ${theme.font.subtitle};
  `,

  RestaurantDistance: styled.span`
    font: ${theme.font.body};
    color: ${theme.color.primary};
  `,

  RestaurantDescription: styled.p`
    display: -webkit-box;
    padding-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font: ${theme.font.body};
  `,
};

interface RestaurantItemProps {
  restaurant: Restaurant;
  onClick: () => void;
}

export function RestaurantItem({ restaurant, onClick }: RestaurantItemProps) {
  const { id, category, name, distance, description } = restaurant;

  return (
    <Style.Wrapper id={id} onClick={onClick}>
      <RestaurantCategoryImage category={category} />
      <Style.RestaurantInfo>
        <Style.DescriptionWrapper>
          <div>
            <Style.RestaurantName>{name}</Style.RestaurantName>
            <Style.RestaurantDistance>
              캠퍼스부터 {distance}분 내
            </Style.RestaurantDistance>
          </div>
        </Style.DescriptionWrapper>
        <Style.RestaurantDescription>{description}</Style.RestaurantDescription>
      </Style.RestaurantInfo>
    </Style.Wrapper>
  );
}
