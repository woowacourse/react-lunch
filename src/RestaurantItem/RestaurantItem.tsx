import React, { Component } from 'react';

import { RestaurantInfo } from '../data/type';
import { CATEGORY_IMAGES } from '../assets/images';
import './RestaurantItem.css';
import Modal from '../Modal/Modal';

interface RestaurantItemProps {
  restaurant: RestaurantInfo;
}

interface RestaurantItemState {
  isModalOpen: boolean;
  modalClassName: string;
}

class RestaurantItem extends Component<
  RestaurantItemProps,
  RestaurantItemState
> {
  constructor(props: RestaurantItemProps) {
    super(props);

    this.state = {
      isModalOpen: false,
      modalClassName: 'modal',
    };
  }

  render() {
    const { id, category, name, distance, description } = this.props.restaurant;
    return (
      <li
        id={id.toString()}
        onClick={this.handleOpenModal}
        className="restaurant pointer"
      >
        <div className="restaurant__category">
          <img
            src={CATEGORY_IMAGES[category]}
            alt={category}
            className="category-icon"
          />
        </div>
        <div className="restaurant__info">
          <h3 className="restaurant__name text-subtitle">{name}</h3>
          <span className="restaurant__distance text-body">
            캠퍼스부터 {distance}분 내
          </span>
          <p className="restaurant__description text-body">{description}</p>
        </div>
        {this.state.isModalOpen && (
          <Modal
            restaurant={this.props.restaurant}
            modalClassName={this.state.modalClassName}
            onClose={this.handleCloseModal}
          />
        )}
      </li>
    );
  }

  handleOpenModal = () => {
    this.setState({ isModalOpen: true, modalClassName: 'modal--open' });
  };

  handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    this.setState({ isModalOpen: false, modalClassName: 'modal' });
  };
}

export default RestaurantItem;
