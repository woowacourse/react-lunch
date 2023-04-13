import { Component } from 'react';
import { Restaurant } from '../../types';
import { imgSrc } from '../../constants/imageSrc';
import styled from 'styled-components';
import {
  DistanceText,
  Image,
  Name,
  RestaurantCategory,
  RestaurantInfoWrapper,
} from '../RestaurantItem/RestaurantItem';

type Props = {
  restaurant: Restaurant;
  onCloseButtonClick: () => void;
};

export class Modal extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { name, category, distance, description, link } = this.props.restaurant;
    const onCloseButtonClick = this.props.onCloseButtonClick;

    return (
      <Wrapper>
        <Backdrop></Backdrop>
        <Container>
          <IconContainer>
            <RestaurantCategory>
              <Image src={imgSrc[category]} alt={category} />
            </RestaurantCategory>
          </IconContainer>
          <RestaurantInfoWrapper>
            <Name>{name}</Name>
            <DistanceText>캠퍼스로부터 {distance}분 내</DistanceText>
            <Description>{description}</Description>
            <a href={link} target="_blank">
              {link}
            </a>
          </RestaurantInfoWrapper>
          <ButtonContainer>
            <DeleteButton>삭제하기</DeleteButton>
            <CloseButton onClick={onCloseButtonClick}>닫기</CloseButton>
          </ButtonContainer>
        </Container>
      </Wrapper>
    );
  }

  componentDidMount() {
     window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.props.onCloseButtonClick();
      }
    });
  }
}

const Wrapper = styled.div``;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font: var(--text-body);
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const DeleteButton = styled.button`
  ${(props) => props.theme.variables.button}
  border: 1px solid var(--grey-300);
  background: transparent;

  color: var(--grey-300);
  font: var(--text-caption);
`;

const CloseButton = styled.button`
  ${(props) => props.theme.variables.button}
  background: var(--primary-color);

  color: var(--grey-100);
  font: var(--text-caption);
`;
