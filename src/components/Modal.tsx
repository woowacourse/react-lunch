import { useEffect } from 'react';
import RestaurantManager from '../domain/RestaurantManager';
import { RestaurantDetail } from '../types/RestaurantDetail';
import { IMAGE_PATH } from '../constants/images';

interface ModalProps {
  isModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  restaurantId: number;
}

const Modal = (props: ModalProps) => {
  const closeModal = () => {
    props.isModalOpen(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModal, false);

    return () => {
      document.removeEventListener('keydown', closeModal, false);
    };
  }, []);

  const restaurantItem = RestaurantManager.getRestaurantByID(
    props.restaurantId
  );

  const { category, name, description, distance, link } =
    restaurantItem as RestaurantDetail;

  return (
    <>
      <div className="modal-backdrop" onClick={closeModal}></div>
      <div className="modal-container">
        <div className="restaurant__category">
          <img
            src={IMAGE_PATH[category]}
            alt={category}
            className="category-icon"
          />
        </div>
        <div className="modal-header">
          <h3 className="modal-title text-title">{name}</h3>
        </div>
        <div className="modal-item">
          <span className="restaurant__distance text-body">
            캠퍼스부터 {distance}분 내
          </span>
        </div>
        <div className="modal-item">
          <p>{description}</p>
        </div>
        {link && (
          <div className="modal-item">
            <a href="${link}" target="_blank">
              {link}
            </a>
          </div>
        )}
        <button
          onClick={closeModal}
          id="cancel-modal-button"
          className="button button--primary text-caption"
        >
          닫기
        </button>
      </div>
    </>
  );
};
export default Modal;
