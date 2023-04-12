import React from 'react';
import { restaurant } from '../utils/interfaces';
import '../styles/Item.css';
import { CATEGORY_IMAGE_PATH } from '../utils/constants';

type itemProps = {
  props: restaurant;
};

type itemState = {
  isOpen: boolean;
};

class Item extends React.Component<itemProps, itemState> {
  render(): React.ReactNode {
    const { category, name, distance, description, id } = this.props.props;
    return (
      <li className="restaurant" data-id={id}>
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
    );
  }
}

export default Item;
