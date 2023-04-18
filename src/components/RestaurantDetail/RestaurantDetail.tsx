import { Restaurant } from '../../types/restaurant';

import React, { KeyboardEvent, useEffect, useRef } from 'react';
import { CategoryImage } from '..';
import * as styled from './RestaurantDetail.styles';

interface Props {
  closeModal: () => void;
  restaurant: Restaurant;
}

const RestaurantDetail = ({ closeModal, restaurant }: Props) => {
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalContainerRef) {
      modalContainerRef.current.focus();
    }
    document.body.classList.add('overflow-hidden');

    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code !== 'Escape') return;

    closeModal();
  };

  return (
    <>
      <styled.ModalBackdrop onClick={closeModal} />
      <styled.ModalContainer ref={modalContainerRef} onKeyUp={onKeyUp} tabIndex={0}>
        <styled.Detail>
          <CategoryImage category={restaurant.category} />
          <styled.RestaurantName>{restaurant.name}</styled.RestaurantName>
          <styled.Distance>캠퍼스부터 {restaurant.distance}분 내</styled.Distance>
          <styled.Description>{restaurant.description}</styled.Description>
          {restaurant.link && <styled.Link href={restaurant.link}>{restaurant.link}</styled.Link>}
          <styled.ButtonContainer>
            <styled.RemoveButton>삭제하기</styled.RemoveButton>
            <styled.CloseButton onClick={closeModal}>닫기</styled.CloseButton>
          </styled.ButtonContainer>
        </styled.Detail>
      </styled.ModalContainer>
    </>
  );
};

export default RestaurantDetail;
