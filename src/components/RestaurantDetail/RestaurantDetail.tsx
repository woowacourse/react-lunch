import { Restaurant } from '../../types/restaurant';

import React from 'react';
import { CategoryImage } from '..';
import * as styled from './RestaurantDetail.styles';

interface Props {
  closeModal: () => void;
  restaurant: Restaurant;
}

class RestaurantDetail extends React.Component<Props> {
  render() {
    const { category, name, distance, description, link } = this.props.restaurant;

    return (
      <>
        <styled.ModalBackdrop onClick={this.props.closeModal} />
        <styled.ModalContainer>
          <styled.Detail>
            <CategoryImage category={category} />
            <styled.RestaurantName>{name}</styled.RestaurantName>
            <styled.Distance>캠퍼스부터 {distance}분 내</styled.Distance>
            <styled.Description>{description}</styled.Description>
            <styled.Link href={link}>{link}</styled.Link>
            <styled.ButtonContainer>
              <styled.RemoveButton>삭제하기</styled.RemoveButton>
              <styled.CloseButton onClick={this.props.closeModal}>닫기</styled.CloseButton>
            </styled.ButtonContainer>
          </styled.Detail>
        </styled.ModalContainer>
      </>
    );
  }
}

export default RestaurantDetail;
