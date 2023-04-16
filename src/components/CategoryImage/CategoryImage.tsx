import React from 'react';
import styles from './CategoryImage.module.css';
import { FoodCategory } from '../../types/restaurantInfo';
import KOREAN_IMAGE from './assets/category-korean.png';
import JAPANESE_IMAGE from './assets/category-japanese.png';
import CHINESE_IMAGE from './assets/category-chinese.png';
import ASIAN_IMAGE from './assets/category-asian.png';
import WESTERN_IMAGE from './assets/category-western.png';
import ETC_IMAGE from './assets/category-etc.png';

const CATEGORY_IMAGE: Record<string, string> = {
  한식: KOREAN_IMAGE,
  일식: JAPANESE_IMAGE,
  중식: CHINESE_IMAGE,
  아시안: ASIAN_IMAGE,
  양식: WESTERN_IMAGE,
  기타: ETC_IMAGE,
};

interface CategoryImageProps {
  category: FoodCategory;
};

export function CategoryImage (props: CategoryImageProps) {
  const { category } = props;

  return (
    <div className={styles.background} title={category}>
      <img src={CATEGORY_IMAGE[category]} alt={category} />
    </div>
  );
}

export default CategoryImage;
