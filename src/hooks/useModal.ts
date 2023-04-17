import { useState } from 'react';

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const modalOpen = () => {
    setIsOpenModal(true);
  };

  const modalClose = () => {
    setIsOpenModal(false);
  };

  return { isOpenModal, modalOpen, modalClose };
};

export default useModal;
