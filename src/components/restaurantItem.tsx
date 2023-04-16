import styled from "styled-components";
import { Restaurant } from "../types/restaurant";
import useModal from "../utils/hooks/useModal";
import { convertImage } from "../utils/imageConverter";
import ItemModalContent from "./ItemModalContent";
import Modal from "./modal";

interface PropsType {
  restaurant: Restaurant;
}

export default function RestaurantItem(props: PropsType) {
  const { restaurant } = props;
  const { category, name, takingTime, description } = restaurant;
  const { open, closeModal, openModal } = useModal();

  return (
    <>
      <ItemContainer onClick={openModal}>
        <ImgWrapper>
          <CategoryImg src={convertImage(category)} alt={category} />
        </ImgWrapper>
        <ItemInfo>
          <Name>{name}</Name>
          <TakingTime>캠퍼스로부터 {takingTime}분 내</TakingTime>
          <Description>{description}</Description>
        </ItemInfo>
      </ItemContainer>
      {open && (
        <Modal location="bottom" closeModal={closeModal}>
          <ItemModalContent restaurant={restaurant} />
        </Modal>
      )}
    </>
  );
}

const ItemContainer = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  margin-right: 16px;

  border-radius: 50%;
  background: ${({ theme }) => theme.colors.lighten};
`;

const CategoryImg = styled.img`
  width: 36px;
  height: 36px;
`;

const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Name = styled.h3`
  margin: 0;
  ${({ theme }) => theme.fonts.subtitle};
`;

const TakingTime = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.fonts.body};
`;

const Description = styled.p`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${({ theme }) => theme.fonts.body};
`;
