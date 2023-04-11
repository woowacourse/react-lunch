import { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-backdrop"></div>
        <div className="modal-container">
          <h2 className="modal-title text-title">상세정보</h2>
        </div>
      </div>
    );
  }
}
