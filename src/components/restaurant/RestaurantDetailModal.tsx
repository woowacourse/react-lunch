import styled from 'styled-components';
import { BodyText, SubTitleText } from '../../style/typography';
import RestaurantCategoryIcon from './RestaurantCategoryIcon';
import Modal from '../common/Modal';
import { useContext } from 'react';
import { RestaurantDetailModalContext } from '../../contexts/RestaurantDetailModalContext';

const RestaurantDetailModal = () => {
  const { isModalOpen, modalRestaurantInfo, setIsModalOpen } = useContext(RestaurantDetailModalContext);

  if (!modalRestaurantInfo) return <></>;

  const { category, name, distanceByMinutes, description, referenceUrl } = modalRestaurantInfo;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal onCloseModal={closeModal}>
          <RestaurantCategoryIcon category={category} />
          <Title>{name}</Title>
          <Distance>캠퍼스로부터 {distanceByMinutes}분 내</Distance>
          <Description>{description}</Description>
          <ReferenceURL href={referenceUrl}>{referenceUrl}</ReferenceURL>
        </Modal>
      )}
    </>
  );
};

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

export default RestaurantDetailModal;
