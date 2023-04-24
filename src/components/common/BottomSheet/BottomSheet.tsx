import type { MouseEventHandler, PropsWithChildren } from 'react';
import { useEffect } from 'react';
import * as styled from './BottomSheet.styles';

type BottomSheetProps = PropsWithChildren<{
  isOpened: boolean;
  onClose: () => void;
}>;

const BottomSheet = ({ isOpened, onClose, children }: BottomSheetProps) => {
  const handleClickContainer: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <styled.BottomSheetBackDrop onClick={onClose} $isOpened={isOpened} data-cy="bottom-sheet">
      <styled.BottomSheetContainer onClick={handleClickContainer}>
        {children}
      </styled.BottomSheetContainer>
    </styled.BottomSheetBackDrop>
  );
};

export default BottomSheet;
