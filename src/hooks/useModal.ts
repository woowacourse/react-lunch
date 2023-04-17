import { useState } from 'react';
import type { Restaurant } from '../components/RestaurantItem/type';

export interface ModalState {
  isModalOpen: boolean;
  modalInfo: Restaurant | null;
  openModal: (value: Restaurant) => void;
  closeModal: () => void;
}

function useModal() {
  const [modalInfo, setModalInfo] = useState<Restaurant | null>(null);
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
