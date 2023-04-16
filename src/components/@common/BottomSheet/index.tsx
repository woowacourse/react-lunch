import { PropsWithChildren, useEffect } from 'react';
import St from './styled';

interface BottomSheetProps {
  onClose: VoidFunction;
}

export default function BottomSheet(
  props: PropsWithChildren<BottomSheetProps>
) {
  const { onClose: close, children } = props;

  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    window.addEventListener('keyup', escHandler);

    return () => {
      window.removeEventListener('keyup', escHandler);
    };
  }, []);

  return (
    <>
      <St.Backdrop onClick={close} />
      {children}
    </>
  );
}
