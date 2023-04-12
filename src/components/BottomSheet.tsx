import React from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';
import { BottomSheetType } from '../types';

class BottomSheet extends React.Component<BottomSheetType> {
  constructor(props: BottomSheetType) {
    super(props);
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
  max-height: 100%;
  overflow-y: scroll;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

export default BottomSheet;
