import React from 'react';
import Modal from './Modal';
import { DetailModalProps, DetailModalState } from '../../types';
import { IMAGE_PATH } from '../../constants';

class DetailModal extends React.Component<DetailModalProps, DetailModalState> {
  constructor(props: DetailModalProps) {
    super(props);
  }

  render() {
    const { isOpen, data } = this.props;

    return (
      <Modal isOpen={isOpen}>
        <div className="modal-container">
          <div className="category-favorite-icon-container">
            <div className="restaurant__category">
              <img src={IMAGE_PATH[data.category]} alt={data.category} className="category-icon" />
            </div>
          </div>

          <div className="restaurant__info">
            <h3 className="restaurant__name text-subtitle">{data.name}</h3>
            <span className="restaurant__distance text-body">캠퍼스부터 {data.distance}분 내</span>
            <p className="restaurant__description text-body more-detail">
              {data.description ?? ''}
            </p>
            <a className="restaurant__link text-body" href={data.link ?? ''}>
              {data.link ?? ''}
            </a>
          </div>
        </div>
      </Modal>
    );
  }
}

export default DetailModal;
