import React, { Component } from 'react';
import { RestaurantInfo } from '../types/restaurantInfo';
import CategoryImage from './CategoryImage';
import styles from './RestaurantDetail.module.css';

class RestaurantDetail extends Component<{ restaurantInfo: RestaurantInfo }> {
  render() {
    const {
      restaurantInfo: { category, title, estimatedTime, description, link },
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
          <button type="button" className={styles.button}>
            닫기
          </button>
          <button type="button" className={styles.button}>
            닫기
          </button>
        </div>
      </section>
    );
  }
}

export default RestaurantDetail;
