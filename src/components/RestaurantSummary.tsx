import React, { KeyboardEvent } from 'react';
import { RestaurantInfo } from '../types/restaurantInfo';
import CategoryImage from './CategoryImage/CategoryImage';
import styles from './RestaurantSummary.module.css';

interface RestaurantSummaryProps {
  restaurant: RestaurantInfo;
  onClick: (restaurantInfo: RestaurantInfo) => void;
}

function RestaurantSummary(props: RestaurantSummaryProps) {
  const { restaurant, onClick } = props;
  const { title, estimatedTime, description, category } = restaurant;

  const clickEventHandler = () => onClick(restaurant);
  const keyboardEventHandler = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') clickEventHandler();
  }

  return (
    <li className={styles.summary} onClick={clickEventHandler} onKeyUp={keyboardEventHandler}>
      <CategoryImage category={category} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.estimatedTime}>캠퍼스로부터 {estimatedTime}분 내</p>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
}

export default RestaurantSummary;
