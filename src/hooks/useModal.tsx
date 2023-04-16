import { useState } from 'react';

export default function useModal<T>(
  init: boolean
):
  | { isOpened: true; focused: T; open(args: T): void; close(): void }
  | { isOpened: false; focused: null; open(args: T): void; close(): void } {
  const [isOpened, setIsOpened] = useState(init);
  const [focused, setFocused] = useState<T | null>(null);

  const open = (focused: T) => {
    setFocused(focused);
    setIsOpened(true);
  };

  const close = () => {
    setFocused(null);
    setIsOpened(false);
  };

  if (isOpened && focused) {
    return { isOpened: true, focused, open, close };
  }

  return { isOpened: false, focused: null, open, close };
}
