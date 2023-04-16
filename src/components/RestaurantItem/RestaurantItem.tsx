import variables from 'components/styles/variables';
import { imgSrc } from 'contants';
import { Styled } from 'styled';
import styled from 'styled-components';
import { Restaurant } from 'types';

type Props = {
  restaurant: Restaurant;
  onRestaurantClick: React.MouseEventHandler<HTMLLIElement>;
};

export function RestaurantItem({ restaurant, onRestaurantClick }: Props) {
  const { id, name, category, distance, description } = restaurant;

  return (
    <RestaurantWrapper data-id={id} onClick={onRestaurantClick}>
      <Styled.Restaurant.CategoryImgWrapper>
        <img src={imgSrc[category]} alt={category} />
      </Styled.Restaurant.CategoryImgWrapper>
      <Styled.Restaurant.InfoWrapper>
        <Styled.Restaurant.Name>{name}</Styled.Restaurant.Name>
        <Styled.Restaurant.Distance>캠퍼스로부터 {distance}분 내</Styled.Restaurant.Distance>
        <Description>{description}</Description>
      </Styled.Restaurant.InfoWrapper>
    </RestaurantWrapper>
  );
}

const RestaurantWrapper = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
  cursor: pointer;
`;

const Description = styled(Styled.Restaurant.Description)`
  ${variables.ellipsis(2)}
`;
