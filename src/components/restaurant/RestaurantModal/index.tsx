import React from 'react';

import * as S from './style';
import { Restaurant } from '../../../@types/type';
import Modal from '../../common/Modal';
import CategoryIcon from '../CategoryIcon';

type Props = {
  restaurant: Restaurant;
  closeModal: () => void;
};

const RestaurantModal = ({
  restaurant: { category, name, distanceByMinutes, description, referenceUrl },
  closeModal,
}: Props) => {
  return (
    <Modal closeModal={closeModal}>
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
    </Modal>
  );
};

export default RestaurantModal;
