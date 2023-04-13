import React from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';
import { BottomSheetType } from '../types';
import { $ } from '../utils/domSelector';
import { backgroundOn, slideBottomToUp } from '../style/keyframe';

class BottomSheet extends React.Component<BottomSheetType> {
  constructor(props: BottomSheetType) {
    super(props);
    this.handleScroll(false);
  }

  componentWillUnmount() {
    this.handleScroll(true);
  }

  private handleScroll(isAvailable: boolean) {
    isAvailable ? ($<HTMLElement>('body').style.overflow = '') : ($<HTMLElement>('body').style.overflow = 'hidden');
  }

  render() {
    return (
      <ModalPortal>
        <BackDrop onClick={this.props.onClose} />
        <BottomSheetWrapper>{this.props.children}</BottomSheetWrapper>
      </ModalPortal>
    );
  }
}

const BottomSheetWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: auto;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
  animation: ${slideBottomToUp} 0.4s ease 1;
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
  animation: ${backgroundOn} 0.4s ease 1;
`;

export default BottomSheet;
