import React from 'react';
import { RestaurantInfo } from '../types/restaurantInfo';
import CategoryImage from './CategoryImage';
import styles from './RestaurantSummary.module.css';

interface RestaurantSummaryProps {
  restaurant: RestaurantInfo;
  onClick: (restaurantInfo: RestaurantInfo) => void;
}

export default function RestaurantSummary({ restaurant, onClick }: RestaurantSummaryProps) {
  const { title, estimatedTime, description, category } = restaurant;

  return (
    <li className={styles.summary} onClick={() => onClick(restaurant)} aria-hidden="true">
      <CategoryImage category={category} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <h6 className={styles.estimatedTime}>캠퍼스로부터 {estimatedTime}분 내</h6>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
}
