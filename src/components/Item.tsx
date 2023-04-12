import React from 'react';
import { restaurant } from '../utils/interfaces';
import '../styles/Item.css';
import { CATEGORY_IMAGE_PATH } from '../utils/constants';
import ModalPortal from './ModalPortal';
import ItemInformation from './ItemInformation';

type itemProps = {
  props: restaurant;
};

type itemState = {
  isOpen: boolean;
};

class Item extends React.Component<itemProps, itemState> {
  constructor(props: itemProps | Readonly<itemProps>) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.onClick = this.onClick.bind(this);
    this.closeEvent = this.closeEvent.bind(this);
  }

  onClick() {
    this.setState({ isOpen: true });
  }

  closeEvent() {
    this.setState({ isOpen: false });
  }

  render(): React.ReactNode {
    const { category, name, distance, description, id } = this.props.props;
    return (
      <>
        <li className="restaurant" data-id={id} onClick={this.onClick}>
          <div className="restaurant_info">
            <div className="restaurant__category">
              <img src={CATEGORY_IMAGE_PATH[category]} alt={category} className="category-icon" />
            </div>
            <div className="restaurant__info">
              <h3 className="restaurant__name text-subtitle">{name}</h3>
              <span className="restaurant__distance text-body">캠퍼스로부터 {distance}분 내</span>
              <p className="restaurant__description text-body">{description}</p>
            </div>
          </div>
        </li>
        {this.state.isOpen && (
          <ModalPortal>
            <ItemInformation restaurant={this.props.props} closeEvent={this.closeEvent} />
          </ModalPortal>
        )}
      </>
    );
  }
}

export default Item;
