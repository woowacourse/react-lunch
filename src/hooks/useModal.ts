import { useState } from 'react';
import mockData from '../data/mockData.json';
import type { Restaurant } from '../components/RestaurantItem/type';

const mock = mockData.restaurantList as Restaurant[];

export interface ModalState {
  isModalOpen: boolean;
  modalInfo: Restaurant;
  openModal: (value: Restaurant) => void;
  closeModal: () => void;
}

function useModal() {
  const [modalInfo, setModalInfo] = useState(mock[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (value: Restaurant) => {
    setIsModalOpen(true);
    setModalInfo(value);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.removeProperty('overflow');
  };

  return { isModalOpen, modalInfo, openModal, closeModal };
}

export default useModal;
