import styled from 'styled-components';
import { RestaurantProps } from '../../type';
import { getImageSrc } from '../../utils/util';

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

  RestaurantCategory: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    min-width: 64px;
    min-height: 64px;
    margin-right: 16px;
    border-radius: 50%;
    background: var(--lighten-color);
  `,

  DescriptionWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  RestaurantName: styled.h3`
    font: var(--lunch-subtitle);
  `,

  RestaurantDistance: styled.span`
    font: var(--lunch-body);
    color: var(--primary-color);
  `,

  RestaurantDescription: styled.p`
    display: -webkit-box;
    padding-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font: var(--lunch-body);
  `,
};

export function RestaurantItem({ restaurant }: RestaurantProps) {
  return (
    <Style.Wrapper id={restaurant.id}>
      <Style.RestaurantCategory>
        <img src={getImageSrc(restaurant.category)} alt={restaurant.category} />
      </Style.RestaurantCategory>
      <Style.RestaurantInfo>
        <Style.DescriptionWrapper>
          <div>
            <Style.RestaurantName>{restaurant.name}</Style.RestaurantName>
            <Style.RestaurantDistance>
              캠퍼스부터 {restaurant.distance}분 내
            </Style.RestaurantDistance>
          </div>
        </Style.DescriptionWrapper>
        <Style.RestaurantDescription>
          {restaurant.description}
        </Style.RestaurantDescription>
      </Style.RestaurantInfo>
    </Style.Wrapper>
  );
}
