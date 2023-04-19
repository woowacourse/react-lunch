import type { PropsWithChildren } from 'react';
import { useCallback, useEffect } from 'react';
import * as styled from './BottomSheet.styles';

type BottomSheetProps = React.PropsWithChildren<{
  isOpened: boolean;
  onClose: () => void;
}>;

const BottomSheet = ({ isOpened, onClose, children }: PropsWithChildren<BottomSheetProps>) => {
  const handleClickContainer: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') onClose();
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
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
