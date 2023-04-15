import { CATEGORY_TO_FILENAME } from '../../image/image';
import { RestaurantItemProps } from '../../types/types';
import styles from './RestaurantItem.module.css';

const RestaurantItem = (props: RestaurantItemProps) => {
  const imageFile = CATEGORY_TO_FILENAME[props.category];

  return (
    <>
      <div className={styles.category}>
        <img src={imageFile} alt={props.category} className={styles.icon} />
      </div>
      <div className={styles.information}>
        <h3 className={styles.subtitle}>{props.name}</h3>
        <p className={styles.distance}>캠퍼스부터 {props.distance}분 내</p>
        <p className={styles.description}>{props.description}</p>
      </div>
    </>
  );
};

export default RestaurantItem;
