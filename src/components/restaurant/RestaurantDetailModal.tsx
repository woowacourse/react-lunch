import styled from 'styled-components';
import { Restaurant } from '../../@types/type';
import { BodyText, SubTitleText } from '../../style/typography';
import RestaurantCategoryIcon from './RestaurantCategoryIcon';
import Modal from '../common/Modal';

type RestaurantDetailModalProps = {
  restaurant: Restaurant;
  onCloseModal: () => void;
};

const RestaurantDetailModal = ({ restaurant, onCloseModal }: RestaurantDetailModalProps) => {
  const { category, name, distanceByMinutes, description, referenceUrl } = restaurant;

  return (
    <Modal onCloseModal={onCloseModal}>
      <RestaurantCategoryIcon category={category} />
      <Title>{name}</Title>
      <Distance>캠퍼스로부터 {distanceByMinutes}분 내</Distance>
      <Description>{description}</Description>
      <ReferenceURL href={referenceUrl}>{referenceUrl}</ReferenceURL>
    </Modal>
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
