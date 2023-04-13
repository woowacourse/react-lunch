import React, { Component } from 'react';
import { RestaurantInfo } from '../types/restaurantInfo';
import CategoryImage from './CategoryImage';
import styles from './RestaurantDetail.module.css';
import Button from './Button';

class RestaurantDetail extends Component<{ restaurantInfo: RestaurantInfo; onCloseClick: () => void }> {
  render() {
    const {
      restaurantInfo: { category, title, estimatedTime, description, link },
      onCloseClick,
    } = this.props;

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
          <Button
            text="삭제하기"
            kind="secondary"
            onClick={() => {
              console.log('삭제하기 버튼 클릭');
            }}
          />
          <Button text="닫기" kind="primary" onClick={onCloseClick} />
        </div>
      </section>
    );
  }
}

export default RestaurantDetail;
