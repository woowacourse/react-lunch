import { CATEGORY_TO_FILENAME } from '../../image/image';
import { RestaurantItemProps } from '../../types/types';
import styles from './RestaurantItem.module.css';

const RestaurantItem = ({ category, name, distance, description }: RestaurantItemProps) => {
  const imageFile = CATEGORY_TO_FILENAME[category];

  return (
    <>
      <div className={styles.category}>
        <img src={imageFile} alt={category} className={styles.icon} />
      </div>
      <div className={styles.information}>
        <h3 className={styles.subtitle}>{name}</h3>
        <p className={styles.distance}>캠퍼스부터 {distance}분 내</p>
        <p className={styles.description}>{description}</p>
      </div>
    </>
  );
};

export default RestaurantItem;
