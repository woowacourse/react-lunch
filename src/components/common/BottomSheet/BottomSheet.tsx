import React, { useEffect } from 'react';
import * as styled from './BottomSheet.styles';

type BottomSheetProps = React.PropsWithChildren<{
  isOpened: boolean;
  onClose: () => void;
}>;

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpened, onClose, children }) => {
  const handleClickContainer: React.MouseEventHandler<HTMLDivElement> = (event) => {
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
  }, []);

  return (
    <styled.BottomSheetBackDrop onClick={onClose} $isOpened={isOpened} data-cy="bottom-sheet">
      <styled.BottomSheetContainer onClick={handleClickContainer}>
        {children}
      </styled.BottomSheetContainer>
    </styled.BottomSheetBackDrop>
  );
};

export default BottomSheet;
