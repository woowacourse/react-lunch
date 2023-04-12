import { Component } from 'react';

import './style.css';

import Modal from '../common/Modal';
import CategoryIcon from '../common/CategoryIcon';

import { Restaurant } from '../../domain/type';

interface Props {
  restaurant: Restaurant | undefined;
  isModalOpened: boolean;
  onCloseModal: () => void;
}

class RestaurantDetailModal extends Component<Props> {
  render() {
    if (!this.props.restaurant) return;

    const { category, name, distance, description, link } =
      this.props.restaurant;

    return (
      <Modal
        isModalOpened={this.props.isModalOpened}
        onCloseModal={this.props.onCloseModal}
      >
        <div className="restaurant-detail-modal">
          <div className="icon-container">
            <div className="restaurant__category">
              <CategoryIcon category={category} />
            </div>
          </div>
          <h2 className="modal-title text-title detail-title">{name}</h2>
          <span className="restaurant__distance text-body detail-distance">
            캠퍼스부터 {distance}분 내
          </span>
          <div className="description">{description}</div>
          {link ? (
            <a
              href={link}
              target="_blank"
              className="text-body link"
              rel="noreferrer"
            >
              {link}
            </a>
          ) : (
            ''
          )}
          <div className="button-container detail-button-container">
            <button
              type="button"
              className="button button--secondary text-caption"
            >
              삭제하기
            </button>
            <button
              className="button button--primary text-caption"
              onClick={this.props.onCloseModal}
            >
              닫기
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default RestaurantDetailModal;
