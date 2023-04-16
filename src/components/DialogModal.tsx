import { useEffect, useRef, useState } from 'react';
import { IMAGE_PATH } from '../constants/images';
import RestaurantManager from '../domain/RestaurantManager';
import { RestaurantDetail } from '../types/RestaurantDetail';

type DialogModalProps = React.PropsWithChildren<{
  setShow: (isShow: boolean) => void;
  restaurantID: number;
}>;

export const DialogModal = ({
  setShow,
  children,
  restaurantID,
}: DialogModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [restaurantDetail, setRestaurantDetail] = useState(
    {} as RestaurantDetail
  );

  useEffect(() => {
    const detail = RestaurantManager.getRestaurantByID(restaurantID);
    if (!detail) return;

    setRestaurantDetail(detail);
  }, [restaurantID]);

  const { category, description, distance, name, link } = restaurantDetail;

  return (
    <div className="modal modal--open" ref={modalRef}>
      <div
        className="modal-backdrop"
        onClick={() => {
          setShow(false);
        }}
      ></div>
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
            <a href={link} target="_blank">
              {link}
            </a>
          </div>
        )}
        <button
          id="cancel-modal-button"
          className="button button--primary text-caption"
          onClick={() => {
            setShow(false);
          }}
        >
          닫기
        </button>
      </div>

      {children}
    </div>
  );
};
