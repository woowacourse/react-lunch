import React from 'react';
import * as styled from './BottomSheet.styles';

type BottomSheetProps = React.PropsWithChildren<{
  isOpened: boolean;
  onClose: () => void;
}>;

class BottomSheet extends React.PureComponent<BottomSheetProps> {
  componentDidMount(): void {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickContainer: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  handleKeyDown = (event: KeyboardEvent) => {
    const { onClose } = this.props;

    if (event.key === 'Escape') onClose();
  };

  render() {
    const { isOpened, onClose, children } = this.props;

    return (
      <styled.BottomSheetBackDrop onClick={onClose} $isOpened={isOpened} data-cy="bottom-sheet">
        <styled.BottomSheetContainer onClick={this.handleClickContainer}>
          {children}
        </styled.BottomSheetContainer>
      </styled.BottomSheetBackDrop>
    );
  }
}

export default BottomSheet;
