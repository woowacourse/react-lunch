import { Component } from 'react';
import { RestaurantDetail } from '../types/RestaurantDetail';

interface RestaurantItemProps {
  detail: RestaurantDetail;
}

export default class RestaurantItem extends Component<RestaurantItemProps> {
  constructor(props: RestaurantItemProps) {
    super(props);
  }

  render() {
    const { id, category, name, distance, description } = this.props.detail;
    return (
      <>
        <li className="restaurant" id={String(id)}>
          <div className="restaurant__category">
            <img
              src="./category-korean.png"
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
        </li>
      </>
    );
  }
}
