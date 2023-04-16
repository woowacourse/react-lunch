import React from 'react';
import { RestaurantInfo } from '../types/restaurantInfo';
import CategoryImage from './CategoryImage';
import styles from './RestaurantDetail.module.css';
import Button from './Button';

interface RestaurantDetailProps {
  restaurantInfo: RestaurantInfo;
  onDeleteClick: () => void;
  onCloseClick: () => void;
}

export default function RestaurantDetail({ restaurantInfo, onCloseClick, onDeleteClick }: RestaurantDetailProps) {
  const { category, title, estimatedTime, description, link } = restaurantInfo;

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <CategoryImage category={category} />
        <h2 className={styles.title}>{title}</h2>
        <h5 className={styles.estimatedTime}>캠퍼스로부터 {estimatedTime}분 내</h5>
        <p className={styles.description}>{description}</p>
        <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
          {link}
        </a>
      </div>
      <div className={styles.buttonContainer}>
        <Button text="삭제하기" kind="secondary" onClick={onDeleteClick} />
        <Button text="닫기" kind="primary" onClick={onCloseClick} />
      </div>
    </section>
  );
}
