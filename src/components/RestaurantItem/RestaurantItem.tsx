import { Component } from 'react';
import { CATEGORY_TO_FILENAME } from '../../image/image';
import { RestaurantItemProps } from '../../types/types';
import styles from './RestaurantItem.module.css';

export default class RestaurantItem extends Component<RestaurantItemProps> {
  render() {
    const imageFile = CATEGORY_TO_FILENAME[this.props.category];

    return (
      <>
        <div className={styles.category}>
          <img src={imageFile} alt={this.props.category} className={styles.icon} />
        </div>
        <div className={styles.information}>
          <h3 className={styles.subtitle}>{this.props.name}</h3>
          <p className={styles.distance}>캠퍼스부터 {this.props.distance}분 내</p>
          <p className={styles.description}>{this.props.description}</p>
        </div>
      </>
    );
  }
}
