import './style.css';

import Modal from '../common/Modal';
import CategoryIcon from '../common/CategoryIcon';

import type { Restaurant } from '../../domain/type';

interface Props {
  restaurant: Restaurant;
  onCloseModal: () => void;
}

export default function RestaurantDetailModal(props: Props) {
  const { category, name, takeTime, description, link } = props.restaurant;

  return (
    <Modal onCloseModal={props.onCloseModal}>
      <div className="restaurant-detail-modal">
        <div className="icon-container">
          <div className="restaurant__category">
            <CategoryIcon category={category} />
          </div>
        </div>
        <h2 className="modal-title text-title detail-title">{name}</h2>
        <span className="restaurant__takeTime text-body detail-takeTime">
          캠퍼스부터 {takeTime}분 내
        </span>
        {description ? <div className="description">{description}</div> : null}
        {link ? (
          <a
            href={link}
            target="_blank"
            className="text-body link"
            rel="noreferrer"
          >
            {link}
          </a>
        ) : null}
        <div className="button-container detail-button-container">
          <button
            type="button"
            className="button button--secondary text-caption"
          >
            삭제하기
          </button>
          <button
            className="button button--primary text-caption"
            onClick={props.onCloseModal}
          >
            닫기
          </button>
        </div>
      </div>
    </Modal>
  );
}
