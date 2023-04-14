import React, { useContext } from 'react';
import categoryAsian from '../../assets/category-asian.png';
import categoryChinese from '../../assets/category-chinese.png';
import categoryEtc from '../../assets/category-etc.png';
import categoryJapanese from '../../assets/category-japanese.png';
import categoryKorean from '../../assets/category-korean.png';
import categoryWestern from '../../assets/category-western.png';
import Store from '../../store';
import styles from './RestaurantItem.module.css';
import type { Category, Restaurant } from './type';

interface Props {
	restaurant: Restaurant;
	isModal: boolean;
}

const makeCategoryImgPath = (category: Category) => {
	switch (category) {
		case '한식':
			return categoryKorean;
		case '일식':
			return categoryJapanese;
		case '중식':
			return categoryChinese;
		case '아시안':
			return categoryAsian;
		case '양식':
			return categoryWestern;
		default:
			return categoryEtc;
	}
};

function RestaurantItem({ restaurant, isModal }: Props) {
	const { setModalId, setIsModalOpen } = useContext(Store);
	const { id, category, name, distance, description, link } = restaurant;

	const openModal = () => {
		setIsModalOpen(true);
		setModalId(id);
		document.body.style.overflow = 'hidden';
	};

	return (
		<li className={isModal ? styles.itemModal : styles.item} onClick={openModal}>
			<div className={styles.icon}>
				<img src={makeCategoryImgPath(category)} alt={category} />
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
