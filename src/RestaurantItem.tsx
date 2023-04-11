import React from "react";
import { Restaurant } from "./type";

type RestaurantProps = {
    readonly restaurant: Omit<Restaurant,"link">;
}
class RestaurantItem extends React.Component<RestaurantProps> {

    render() {
      return (
        <li className='restaurant'>
          <div className='restaurant__category'>
            {/* <img src={this.props.restaurant.imageUrl} alt="한식" className="category-icon"> */}
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