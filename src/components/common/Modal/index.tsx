import React, { useEffect } from 'react';

import * as S from './style';
import { Restaurant } from '../../../@types/type';
import CategoryIcon from '../../restaurant/CategoryIcon';

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
    <React.Fragment>
      <S.ModalBackdropBox onClick={closeModal} />
      <S.ModalContentContainer>
        <CategoryIcon category={category} />
        <S.RestaurantTitle>{name}</S.RestaurantTitle>
        <S.RestaurantDistance>캠퍼스로부터 {distanceByMinutes}분 내</S.RestaurantDistance>
        <S.RestaurantDescription>{description}</S.RestaurantDescription>
        <S.RestaurantReferenceURL href={referenceUrl}>{referenceUrl}</S.RestaurantReferenceURL>
        <S.ButtonContainer>
          <S.ModalButton onClick={closeModal}>닫기</S.ModalButton>
        </S.ButtonContainer>
      </S.ModalContentContainer>
    </React.Fragment>
  );
};

export default Modal;
