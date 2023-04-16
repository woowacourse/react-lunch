import styled from 'styled-components';

type BottomSheetBackDropProps = {
  $isOpened: boolean;
};

export const BottomSheetBackDrop = styled.div<BottomSheetBackDropProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: ${(props) => (props.$isOpened ? 'flex' : 'none')};
  justify-content: center;
  align-items: flex-end;

  background: rgba(0, 0, 0, 0.35);
`;

export const BottomSheetContainer = styled.div`
  width: 100%;
  max-height: 88vh;

  padding: 32px 16px;

  border-radius: 8px 8px 0 0;
  background: var(--grey-100);
  overflow-y: auto;
`;
