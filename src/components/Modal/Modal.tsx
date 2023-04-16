import { imgSrc } from 'contants';
import { useClickEvent } from 'hooks/useClickEvent';
import { useKeyDownEvent } from 'hooks/useKeyDownEvent';
import { useRef } from 'react';
import { Styled } from 'styled';
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
          <Styled.Restaurant.CategoryImgWrapper>
            <img src={imgSrc[category]} alt={category} />
          </Styled.Restaurant.CategoryImgWrapper>
        </IconContainer>
        <Styled.Restaurant.InfoWrapper>
          <Styled.Restaurant.Name>{name}</Styled.Restaurant.Name>
          <Styled.Restaurant.Distance>캠퍼스로부터 {distance}분 내</Styled.Restaurant.Distance>
          <Description>{description}</Description>
          <a href={link} target="_blank" rel="noreferrer noopener">
            {link}
          </a>
        </Styled.Restaurant.InfoWrapper>
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

const Description = styled(Styled.Restaurant.Description)`
  padding-top: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-top: 16px;
`;

const DeleteButton = styled(Styled.Button)`
  border: 1px solid var(--grey-300);
  background: transparent;

  color: var(--grey-300);
  font: var(--text-caption);
`;

const CloseButton = styled(Styled.Button)`
  background: var(--primary-color);

  color: var(--grey-100);
  font: var(--text-caption);
`;
