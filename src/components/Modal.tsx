import React from "react";
import styled from "styled-components";
import { useModal } from "../hooks/useModal";
import useRestaurant from "../hooks/useRestaurant";
import RestaurantView from "./RestaurantView";

function Modal() {
  const { modalOpen, closeModal } = useModal();
  const { restaurant } = useRestaurant();

  return (
    <>
      {
        modalOpen && (
          <ModalContainer>
            <ModalBackDrop onClick={() => closeModal()}></ModalBackDrop>
            <ModalContent>
              <RestaurantView restaurant={restaurant} closeModal={closeModal} />
            </ModalContent>
          </ModalContainer>
        )
      }
    </>
  )
}

export default Modal;

const ModalContainer = styled.div`
display: block;
`

const ModalBackDrop = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: rgba(0, 0, 0, 0.35); 
`
const ModalContent = styled.div`
position: fixed;
bottom: 0;
width:100%;
padding: 32px 16px;
border-radius: 8px 8px 0px 0px;
background: #ffffff;
`
