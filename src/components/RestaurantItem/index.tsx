import React from 'react';
import categoryAsian from '../../assets/category-asian.png';
import categoryChinese from '../../assets/category-chinese.png';
import categoryEtc from '../../assets/category-etc.png';
import categoryJapanese from '../../assets/category-japanese.png';
import categoryKorean from '../../assets/category-korean.png';
import categoryWestern from '../../assets/category-western.png';
import Store from '../../store';
import { Category, Restaurant, State } from '../../store/type';

import styles from './RestaurantItem.module.css';

interface MyProps {
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

function RestaurantItem(props: MyProps) {
	const { restaurant, isModal } = props;

	const handleRestaurantItemModal = (store: State | null) => () => {
		store?.toggleModal();
		store?.setModalId(restaurant.id);
		document.body.style.overflow = 'hidden';
	};

	if (restaurant === undefined) return <>no result</>;

	return (
		<Store.Consumer>
			{(store) => (
				<li className={isModal ? styles.itemModal : styles.item} onClick={handleRestaurantItemModal(store)}>
					<div className={styles.icon}>
						<img src={makeCategoryImgPath(restaurant.category)} alt={restaurant.category} />
					</div>
					<article className={isModal ? styles.articleModal : undefined}>
						<h2 className={styles.title}>{restaurant.name}</h2>
						<div className={styles.distance}>캠퍼스로부터 {restaurant.distance}분 내</div>
						<div className={isModal ? styles.descriptionModal : styles.description}>{restaurant.description}</div>
						{isModal && restaurant.link && (
							<a href={restaurant.link} className={styles.link}>
								{restaurant.link}
							</a>
						)}
					</article>
				</li>
			)}
		</Store.Consumer>
	);
}

export default RestaurantItem;
