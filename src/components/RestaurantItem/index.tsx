import useWrappingContext from '../../hooks/useWrappingContext';
import Store from '../../store';
import pickIconByCategory from '../../utils/pickIconByCategory';
import styles from './RestaurantItem.module.css';
import type { Restaurant } from './type';

interface Props {
  restaurant: Restaurant;
  isModal: boolean;
}

function RestaurantItem({ restaurant, isModal }: Props) {
  const { setModalId, setIsModalOpen } = useWrappingContext(Store);
  const { id, category, name, distance, description, link } = restaurant;

  const openModal = () => {
    setIsModalOpen(true);
    setModalId(id);
    document.body.style.overflow = 'hidden';
  };

  return (
    <li className={isModal ? styles.itemModal : styles.item} onClick={openModal}>
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
