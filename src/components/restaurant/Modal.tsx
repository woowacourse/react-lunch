import { useEffect } from 'react';
import styled from 'styled-components';
import CategoryIcon from './CategoryIcon';
import { Restaurant, SetModalRestaurantId } from '../../@types/type';
import { BodyText, SubTitleText } from '../../style/typography';

type ModalProps = { restaurant: Restaurant } & SetModalRestaurantId;

const Modal = ({ restaurant, setModalRestaurantId }: ModalProps) => {
  const { category, name, distanceByMinutes, description, referenceUrl } = restaurant;

  const onCloseModal = () => {
    setModalRestaurantId(null);
  };

  const onKeyDownEscape = (event: KeyboardEvent) => {
    if (event.code !== 'Escape') return;
    onCloseModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownEscape);
    return () => window.removeEventListener('keydown', onKeyDownEscape);
  });

  return (
    <>
      <ModalBackdrop onClick={onCloseModal} />
      <ModalContent>
        <CategoryIcon category={category} />
        <Title>{name}</Title>
        <Distance>캠퍼스로부터 {distanceByMinutes}분 내</Distance>
        <Description>{description}</Description>
        <ReferenceURL href={referenceUrl}>{referenceUrl}</ReferenceURL>
        <CloseButton onClick={onCloseModal}>닫기</CloseButton>
      </ModalContent>
    </>
  );
};

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

const Title = styled(SubTitleText)`
  padding: 16px 0;
`;

const Distance = styled(BodyText)`
  color: var(--primary-color);
`;

const Description = styled(BodyText)`
  margin: 16px 0;
`;

const ReferenceURL = styled.a`
  color: var(--grey-500);
  word-break: break-all;
`;

const CloseButton = styled.button`
  margin-top: 16px;
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background: var(--primary-color);
  color: var(--grey-100);
`;

export default Modal;
