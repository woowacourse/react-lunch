import React from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';
import { $ } from '../../utils/domSelector';
import { useEffect } from 'react';
import { useRef } from 'react';

interface BottomSheetType {
  children: React.ReactNode;
  onClose: () => void;
}

const BottomSheet = (props: BottomSheetType) => {
  const bottomSheetRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (bottomSheetRef.current) bottomSheetRef.current.classList.remove('close_bottom_sheet');
      if (backdropRef.current) backdropRef.current.classList.remove('close_background');
    });
    handleScroll(false);

    return () => {
      handleScroll(true);
    };
  }, []);

  const handleScroll = (isAvailable: boolean) => {
    isAvailable ? ($<HTMLElement>('body').style.overflow = '') : ($<HTMLElement>('body').style.overflow = 'hidden');
  };

  return (
    <ModalPortal>
      <BackDrop ref={backdropRef} id="backdrop" className="close_background" onClick={props.onClose} />
      <BottomSheetWrapper ref={bottomSheetRef} id="bottom_sheet" className="close_bottom_sheet">
        {props.children}
      </BottomSheetWrapper>
    </ModalPortal>
  );
};

const BottomSheetWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: auto;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);

  transition: all 0.4s ease;
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);

  transition: all 0.4s ease;
`;

export default BottomSheet;
