import { Component } from 'react';
import RestaurantDetailView from './RestaurantDetailView';
import { Restaurant } from '../../types';
import './Modal.css';

type ModalProps = {
  restaurant: Restaurant;
  onClick: () => void;
};

export default class Modal extends Component<ModalProps> {
  render() {
    return (
      <div className="modal">
        <div className="modal-backdrop"></div>
        <div className="modal-container">
          <RestaurantDetailView restaurant={this.props.restaurant} />
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
