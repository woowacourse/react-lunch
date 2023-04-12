import React from "react";

import { Restaurant } from "./type";
// logo img
import asianImg from './asset/category-asian.png';
import chineseImg from './asset/category-chinese.png';
import etcImg from './asset/category-etc.png';
import japaneseImg from './asset/category-japanese.png';
import koreanImg from './asset/category-korean.png';
import westernImg from './asset/category-western.png';

type RestaurantProps = {
  readonly restaurant: Omit<Restaurant, 'link'>;
  onToggleDrawer:any;
};
class RestaurantItem extends React.Component<RestaurantProps> {


    render() {
      return (
        <li className='restaurant' onClick={()=>this.props.onToggleDrawer(this.props.restaurant.id)}>
          <div className='restaurant__category'>
            <img src={asianImg} alt='한식' className='category-icon' />
          </div>
          <div className='restaurant__info'>
            <h3 className='restaurant__name text-subtitle'>
              {this.props.restaurant.title}
            </h3>
            <span className='restaurant__distance text-body'>
              캠퍼스로부터 {this.props.restaurant.distance}분 내
            </span>
            <p className='restaurant__description text-body'>
              {this.props.restaurant.description}
            </p>
          </div>
        </li>
      );
    }
}

export default RestaurantItem;