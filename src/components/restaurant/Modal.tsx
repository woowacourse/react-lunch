import { Component } from 'react';
import styled from 'styled-components';
import { Restaurant } from '../../App';

import asian from '../../asset/category-asian.png';
import chinese from '../../asset/category-chinese.png';
import korean from '../../asset/category-korean.png';
import japanese from '../../asset/category-japanese.png';
import western from '../../asset/category-western.png';
import etc from '../../asset/category-etc.png';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 80vh;
  overflow: auto;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: #ffffff;
`;

const Title = styled.h2`
  padding: 16px 0;

  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

const Distance = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #ec4a0a;
`;

const CategoryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  margin-right: 16px;

  border-radius: 50%;
  background: #f6a88a;
  img {
    width: 36px;
    height: 36px;
  }
`;

const Description = styled.p`
  margin: 16px 0;

  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const ReferenceURL = styled.a`
  color: black;
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
  }

  button:last-child {
    margin-right: 0;
  }

  .button--secondary {
    border: 1px solid var(--grey-300);
    background: transparent;

    color: var(--grey-300);
  }

  .button--primary {
    background: var(--primary-color);

    color: var(--grey-100);
  }
`;

const categoryIcon: Record<string, string> = {
  한식: korean,
  중식: chinese,
  일식: japanese,
  양식: western,
  아시안: asian,
  기타: etc,
};

export type Props = {
  category: string;
  name: string;
  distanceByMinutes: number;
  description: string;
  referenceUrl: string;
  setModalRestaurant: (restaurant: Restaurant | null) => void;
};

class Modal extends Component<Props> {
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
          <CategoryIcon>
            <img src={categoryIcon[this.props.category]} alt={this.props.category} />
          </CategoryIcon>
          <Title>{this.props.name}</Title>
          <Distance>캠퍼스로부터 {this.props.distanceByMinutes}분 내</Distance>
          <Description>{this.props.description}</Description>
          <ReferenceURL href={this.props.referenceUrl}>{this.props.referenceUrl}</ReferenceURL>
          <ButtonContainer>
            <button onClick={this.onCloseModal} className="button--primary">
              닫기
            </button>
          </ButtonContainer>
        </ModalContent>
      </div>
    );
  }
}

export default Modal;
