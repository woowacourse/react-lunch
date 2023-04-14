import { Restaurant } from '../types/restaurant';

import React, { useEffect } from 'react';
import { Button, CategoryImage } from './';
import styled from 'styled-components';

import { textBody, textSubtitle } from '../style/mixin';

interface Props {
  restaurant: Restaurant;
  closeModal: () => void;
}

const RestaurantDetail = ({ restaurant, closeModal }: Props) => {
  const { category, name, distance, description, link } = restaurant;

  const onKeyUp = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') closeModal();
  };

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  return (
    <>
      <ModalBackdrop onClick={closeModal} />
      <ModalContainer>
        <Detail>
          <CategoryImage category={category} />
          <RestaurantName>{name}</RestaurantName>
          <Distance>캠퍼스부터 {distance}분 내</Distance>
          <Description>{description}</Description>
          <Link href={link}>{link}</Link>
          <ButtonContainer>
            <RemoveButton>삭제하기</RemoveButton>
            <CloseButton onClick={closeModal}>닫기</CloseButton>
          </ButtonContainer>
        </Detail>
      </ModalContainer>
    </>
  );
};

export default RestaurantDetail;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const Detail = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 508px;
`;

const RestaurantName = styled.h2`
  ${textSubtitle}
  font-weight: 600;
  font-size: 20px;
`;

const Distance = styled.p`
  ${textBody}
  color: #ec4a0a;
`;

const Description = styled.p`
  height: 240px;

  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`;

const Link = styled.a`
  height: 24px;
  color: #000000;
`;

const ButtonContainer = styled.div`
  display: flex;

  button + button {
    margin-left: 16px;
  }
`;

const RemoveButton = styled(Button)`
  border: 1px solid var(--grey-300);

  background: transparent;
  color: var(--grey-300);
`;

const CloseButton = styled(Button)``;
