import React from 'react';
import { restaurant } from '../utils/interfaces';
import '../styles/Item.css';

type itemProps = {
  props: restaurant;
};

class Item extends React.Component<itemProps> {
  render(): React.ReactNode {
    return (
      <li className="restaurant" id="restaurant${restaurantInfo.id}">
        <div className="restaurant_info">
          <div className="restaurant__category">
            {/* <img alt="${restaurantInfo.category}" className="category-icon"> */}
          </div>
          <div className="restaurant__info">
            <h3 className="restaurant__name text-subtitle">{this.props.props.name}</h3>
            <span className="restaurant__distance text-body">캠퍼스로부터 {}분 내</span>
            <p className="restaurant__description text-body">{}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Item;
