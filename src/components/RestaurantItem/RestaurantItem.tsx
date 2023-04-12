import { Component } from 'react';
import { CATEGORY_TO_FILENAME } from '../../image/image';
import { RestaurantItemProps } from '../../types/types';

export default class RestaurantItem extends Component<RestaurantItemProps> {
  render() {
    const imageFile = CATEGORY_TO_FILENAME[this.props.category];

    return (
      <div>
        <img src={imageFile} alt={this.props.category} />
        <div>
          <h2>{this.props.name}</h2>
          <p>캠퍼스부터 {this.props.distance}분 내</p>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
