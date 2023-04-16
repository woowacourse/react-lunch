import React, { useState, useEffect } from 'react';

import { RestaurantInfo } from '../data/type';
import { CATEGORY_IMAGES } from '../assets/images';
import './RestaurantItem.css';
import Modal from '../Modal/Modal';

interface RestaurantItemProps {
  restaurant: RestaurantInfo;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  const [modalClassName, setModalClassName] = useState('modal');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        setModalClassName('modal');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpenModal = () => {
    setModalClassName('modal--open');
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setModalClassName('modal');
  };

  return (
    <li
      id={restaurant.id.toString()}
      onClick={handleOpenModal}
      className="restaurant pointer"
    >
      <div className="restaurant__category">
        <img
          src={CATEGORY_IMAGES[restaurant.category]}
          alt={restaurant.category}
          className="category-icon"
        />
      </div>
      <div className="restaurant__info">
        <h3 className="restaurant__name text-subtitle">{restaurant.name}</h3>
        <span className="restaurant__distance text-body">
          캠퍼스부터 {restaurant.distance}분 내
        </span>
        <p className="restaurant__description text-body">
          {restaurant.description}
        </p>
      </div>
      {modalClassName === 'modal--open' && (
        <Modal
          restaurant={restaurant}
          modalClassName={modalClassName}
          onClose={handleCloseModal}
        />
      )}
    </li>
  );
};

export default RestaurantItem;
