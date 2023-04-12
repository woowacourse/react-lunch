import { Component, PropsWithChildren } from 'react';
import './Modal.css';

type ModalProps = {
  onClick: () => void;
};

export default class Modal extends Component<PropsWithChildren<ModalProps>> {
  render() {
    return (
      <div className="modal">
        <div className="modal-backdrop"></div>
        <div className="modal-container">
          {this.props.children}
          <div className="button-container">
            <button
              id="modal-close-button"
              className="button button--primary text-caption"
              onClick={this.props.onClick.bind(this)}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
