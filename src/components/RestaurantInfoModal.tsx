import { Component, RefObject } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import type { RestaurantInfo } from '../types';
import { ENGLISH_CATEGORY } from '../constants';

interface RestaurantModal {
  selectedRestaurant: null | RestaurantInfo;
  refModal: RefObject<HTMLDialogElement>;
  onClose: () => void;
}

class RestaurantInfoModal extends Component<RestaurantModal> {
  render() {
    const { selectedRestaurant: restaurant } = this.props;

    return (
      <>
        {ReactDom.createPortal(
          <dialog ref={this.props.refModal}>
            <ModalBackdrop
              className='modal-backdrop'
              onClick={this.props.onClose}
            />
            <Modal>
              {restaurant && (
                <>
                  <CategoryContainer>
                    <CategoryImage
                      src={`${process.env.PUBLIC_URL}/assets/category-${
                        ENGLISH_CATEGORY[restaurant.category]
                      }.png`}
                      alt={restaurant.category}
                    />
                  </CategoryContainer>
                  <article>
                    <Name className='text-subtitle'>{restaurant.name}</Name>
                    <TakingTime className='text-body'>
                      캠퍼스부터 {restaurant.takingTime}분 내
                    </TakingTime>
                    <Description className='text-body'>
                      {restaurant.description}
                    </Description>
                    <Link href={restaurant.link} target='_blank'>
                      {restaurant.link}
                    </Link>
                  </article>
                </>
              )}
              <Close
                type='button'
                className='text-caption'
                onClick={this.props.onClose}
              >
                닫기
              </Close>
            </Modal>
          </dialog>,
          document.body
        )}
      </>
    );
  }
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
`;

const Modal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  min-width: 100%;
  height: 60%;
  padding: 32px 16px;
  border: none;
  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const CategoryContainer = styled.div`
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
`;

const CategoryImage = styled.img`
  width: 36px;
  height: 36px;
`;

const Name = styled.h3`
  margin-top: 16px;
`;

const TakingTime = styled.p`
  margin: 16px 0;
  color: var(--primary-color);
`;

const Description = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--grey-500);
`;

const Link = styled.a`
  display: block;
  margin: 16px 0 32px;
  text-decoration: underline;
  outline: none;
  cursor: pointer;
`;

const Close = styled.button`
  position: fixed;
  bottom: 32px;
  width: calc(100% - 32px);
  height: 44px;
  padding: 10px 0px;
  border: 1px solid #ec4a0a;
  border-radius: 8px;
  outline: none;
  background: #ec4a0a;

  color: var(--grey-100);
  cursor: pointer;
`;

export default RestaurantInfoModal;
