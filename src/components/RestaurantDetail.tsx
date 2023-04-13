import { Restaurant } from '../types/restaurant';
import React from 'react';
import styled from 'styled-components';
import { CATEGORY_IMAGE_MAP } from '../constants';
import { textBody, textSubtitle } from '../style/mixin';

interface Props {
  closeModal: () => void;
  restaurant: Restaurant;
}

class RestaurantDetail extends React.Component<Props> {
  render() {
    const { category, name, distance, description, link } = this.props.restaurant;

    return (
      <>
        <ModalBackdrop onClick={this.props.closeModal} />
        <ModalContainer>
          <Detail>
            <CategoryImage>
              <img src={`./img/${CATEGORY_IMAGE_MAP[category]}`} alt={category} />
            </CategoryImage>
            <RestaurantName>{name}</RestaurantName>
            <Distance>캠퍼스부터 {distance}분 내</Distance>
            <Description>{description}</Description>
            <Link href={link}>{link}</Link>
            <ButtonContainer>
              <SecondaryButton>삭제하기</SecondaryButton>
              <PrimaryButton onClick={this.props.closeModal}>닫기</PrimaryButton>
            </ButtonContainer>
          </Detail>
        </ModalContainer>
      </>
    );
  }
}

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

const CategoryImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  margin-right: 16px;

  border-radius: 50%;
  background: var(--lighten-color);

  img {
    width: 36px;
    height: 36px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;
`;

const SecondaryButton = styled(Button)`
  margin-right: 16px;
  border: 1px solid var(--grey-300);

  background: transparent;
  color: var(--grey-300);
`;

const PrimaryButton = styled(Button)`
  background: var(--primary-color);
  color: var(--grey-100);
`;
