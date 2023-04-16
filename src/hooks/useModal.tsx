import { useContext } from "react";
import { GlobalContext } from "../containers/GlobalProvider";

interface useModalProps {
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
export const useModal = (): useModalProps => {
  const globalState = useContext(GlobalContext);
  const { modalOpen, setModalOpen } = globalState;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return { modalOpen, openModal, closeModal };
};
