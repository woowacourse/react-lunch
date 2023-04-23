import useWrappingContext from '../../hooks/useWrappingContext';
import { ModalStore } from '../../store';
import pickIconByCategory from '../../utils/pickIconByCategory';
import styles from './RestaurantItem.module.css';
import type { Restaurant } from './type';

interface Props {
  restaurant: Restaurant;
  isModal: boolean;
}

function RestaurantItem({ restaurant, isModal }: Props) {
  const { openModal } = useWrappingContext(ModalStore);
  const { category, name, distance, description, link } = restaurant;

  return (
    <li className={isModal ? styles.itemModal : styles.item} onClick={() => openModal(restaurant)}>
      <div className={styles.icon}>
        <img src={pickIconByCategory(category)} alt={category} />
      </div>
      <article className={isModal ? styles.articleModal : undefined}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.distance}>캠퍼스로부터 {distance}분 내</div>
        <div className={isModal ? styles.descriptionModal : styles.description}>{description}</div>
        {isModal && link && (
          <a href={link} className={styles.link}>
            {link}
          </a>
        )}
      </article>
    </li>
  );
}

export default RestaurantItem;
