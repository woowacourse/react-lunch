import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Restaurant } from '../../@types/type';
import CategoryIcon from '../restaurant/CategoryIcon';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--backdrop-color);
`;

const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 80vh;
  overflow: auto;
  padding: 32px 16px;
  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const Title = styled.h2`
  padding: 16px 0;
`;

const Distance = styled.span`
  color: var(--primary-color);
`;

const Description = styled.p`
  margin: 16px 0;
`;

const ReferenceURL = styled.a`
  color: var(--grey-500);
  word-break: break-all;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 16px;
  button {
    width: 100%;
    height: 44px;
    margin-right: 16px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    background: var(--primary-color);
    color: var(--grey-100);
  }
`;

type Props = { restaurant: Restaurant; closeModal: () => void };

const Modal = ({ restaurant, closeModal }: Props) => {
  useEffect(() => {
    const onKeyDownEscape = (event: KeyboardEvent) => {
      if (event.code !== 'Escape') return;
      console.log(event.code);
      closeModal();
    };

    window.addEventListener('keydown', onKeyDownEscape);

    return window.removeEventListener('keydown', onKeyDownEscape);
  }, []);

  const { category, name, distanceByMinutes, description, referenceUrl } = restaurant;

  return (
    <div>
      <ModalBackdrop onClick={closeModal} />
      <ModalContent>
        <CategoryIcon category={category} />
        <Title className="text-title">{name}</Title>
        <Distance className="text-body">캠퍼스로부터 {distanceByMinutes}분 내</Distance>
        <Description className="text-body">{description}</Description>
        <ReferenceURL href={referenceUrl}>{referenceUrl}</ReferenceURL>
        <ButtonContainer>
          <button onClick={closeModal}>닫기</button>
        </ButtonContainer>
      </ModalContent>
    </div>
  );
};

export default Modal;
