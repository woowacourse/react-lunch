import React, { Component } from 'react';
import { RestaurantInfo } from '../types/restaurantInfo';
import CategoryImage from './CategoryImage';
import styles from './RestaurantSummary.module.css';

class RestaurantSummary extends Component<{ restaurant: RestaurantInfo }> {
  render() {
    const {
      restaurant: { title, estimatedTime, description, category },
    } = this.props;
    return (
      <li className={styles.summary}>
        <CategoryImage category={category} />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <h6 className={styles.estimatedTime}>캠퍼스로부터 {estimatedTime}분 내</h6>
          <p className={styles.description}>{description}</p>
        </div>
      </li>
    );
  }
}

export default RestaurantSummary;
