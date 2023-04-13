import { Component } from 'react';
import styled from 'styled-components';
import CategoryIcon from './CategoryIcon';
import { Restaurant, SetModalRestaurant } from '../../@types/type';

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

const Title = styled.h2`
  padding: 16px 0;
`;

const Distance = styled.span`
  color: var(--primary-color);
`;

const Description = styled.p`
  margin: 16px 0;
`;

const ReferenceURL = styled.a`
  color: var(--grey-500);
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 16px;

  button {
    width: 100%;
    height: 44px;

    margin-right: 16px;

    border: none;
    border-radius: 8px;

    font-weight: 600;
    cursor: pointer;

    background: var(--primary-color);
    color: var(--grey-100);
  }
`;

class Modal extends Component<Restaurant & SetModalRestaurant> {
  onCloseModal = () => {
    this.props.setModalRestaurant(null);
  };

  onKeyDownEscape = (event: KeyboardEvent) => {
    if (event.code !== 'Escape') return;
    this.onCloseModal();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDownEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDownEscape);
  }

  render() {
    return (
      <div>
        <ModalBackdrop onClick={this.onCloseModal} />
        <ModalContent>
          <CategoryIcon category={this.props.category} />
          <Title className="text-title">{this.props.name}</Title>
          <Distance className="text-body">캠퍼스로부터 {this.props.distanceByMinutes}분 내</Distance>
          <Description className="text-body">{this.props.description}</Description>
          <ReferenceURL href={this.props.referenceUrl}>{this.props.referenceUrl}</ReferenceURL>
          <ButtonContainer>
            <button onClick={this.onCloseModal}>닫기</button>
          </ButtonContainer>
        </ModalContent>
      </div>
    );
  }
}

export default Modal;
