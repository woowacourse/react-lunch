import {
  DistanceText,
  Image,
  Name,
  RestaurantCategory,
  RestaurantInfoWrapper,
} from 'components/RestaurantItem/RestaurantItem';
import { imgSrc } from 'contants';
import { useClickEvent } from 'hooks/useClickEvent';
import { useKeyDownEvent } from 'hooks/useKeyDownEvent';
import { useRef } from 'react';
import { Button } from 'styled';
import styled from 'styled-components';
import { Restaurant } from 'types';

type Props = {
  restaurant: Restaurant;
  onCloseButtonClick: () => void;
};

export function Modal({ restaurant, onCloseButtonClick }: Props) {
  const { category, name, distance, description, link } = restaurant;
  const BackdropRef = useRef<HTMLDivElement>(null);

  useKeyDownEvent('Escape', onCloseButtonClick);
  useClickEvent(BackdropRef, onCloseButtonClick);

  return (
    <Wrapper>
      <Backdrop ref={BackdropRef} />
      <Container>
        <IconContainer>
          <RestaurantCategory>
            <Image src={imgSrc[category]} alt={category} />
          </RestaurantCategory>
        </IconContainer>
        <RestaurantInfoWrapper>
          <Name>{name}</Name>
          <DistanceText>캠퍼스로부터 {distance}분 내</DistanceText>
          <Description>{description}</Description>
          <a href={link} target="_blank" rel="noreferrer noopener">
            {link}
          </a>
        </RestaurantInfoWrapper>
        <ButtonContainer>
          <DeleteButton>삭제하기</DeleteButton>
          <CloseButton onClick={onCloseButtonClick}>닫기</CloseButton>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font: var(--text-body);
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const DeleteButton = styled(Button)`
  border: 1px solid var(--grey-300);
  background: transparent;

  color: var(--grey-300);
  font: var(--text-caption);
`;

const CloseButton = styled(Button)`
  background: var(--primary-color);

  color: var(--grey-100);
  font: var(--text-caption);
`;
