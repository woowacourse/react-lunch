import { useEffect } from 'react';

const useCloseModal = (
  setStateModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const closeModal = () => {
    setStateModal(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModal, false);

    return () => {
      document.removeEventListener('keydown', closeModal, false);
    };
  }, []);

  return closeModal;
};

export default useCloseModal;
