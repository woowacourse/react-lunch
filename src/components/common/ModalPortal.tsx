import { Component } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

import styles from "./ModalPortal.module.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

class ModalPortal extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return createPortal(
      <>
        <div className={styles.backdrop} onClick={this.props.onClose}></div>
        {this.props.children}
      </>,
      document.getElementById("modal-root") as HTMLDivElement
    );
  }
}

export default ModalPortal;
