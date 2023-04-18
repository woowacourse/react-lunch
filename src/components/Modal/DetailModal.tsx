import './DetailModal.css';
import Modal, { ModalProps } from './Modal';
import { IMAGE_PATH } from '../../constants';
import { Restaurant } from '../../types';

export interface DetailModalProps extends ModalProps {
  restaurant: Restaurant;
  handleModalClose: () => void;
}

function DetailModal({ restaurant, handleModalClose }: DetailModalProps) {
  const { category, name, distance, description, link } = restaurant;

  return (
    <Modal handleModalClose={handleModalClose}>
      <div className="restaurant__info">
        <div className="category-favorite-icon-container">
          <div className="restaurant__category">
            <img src={`${IMAGE_PATH[category]}`} alt={category} className="category-icon" />
          </div>
        </div>
        <h3 className="restaurant__name text-subtitle">{name}</h3>
        <span className="restaurant__distance text-body">캠퍼스부터 {distance}분 내</span>
        <p className="restaurant__description text-body more-detail">{description}</p>
        <a className="restaurant__link text-body" href={link}>
          {link}
        </a>
      </div>
    </Modal>
  );
}

export default DetailModal;
