import React from 'react';
import styles from './RestaurantItem.module.css';
import type { Restaurant, category } from './type';
import categoryKorean from '../../assets/category-korean.png';
import categoryAsian from '../../assets/category-asian.png';
import categoryChinese from '../../assets/category-chinese.png';
import categoryJapanese from '../../assets/category-japanese.png';
import categoryWestern from '../../assets/category-western.png';
import categoryEtc from '../../assets/category-etc.png';

interface MyProps {
	restaurant: Restaurant;
}

interface MyState {
	isModal: boolean;
}

const makeCategoryImgPath = (category: category) => {
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
		case '기타':
			return categoryEtc;
		default:
			return;
	}
};

class RestaurantItem extends React.Component<MyProps, MyState> {
	render() {
		const { restaurant } = this.props;
		return (
			<li>
				<div className={styles.icon}>
					<img src={makeCategoryImgPath(restaurant.category)} alt={restaurant.category} />
				</div>
				<article>
					<h2 className={styles.title}>{restaurant.name}</h2>
					<div className={styles.distance}>캠퍼스로부터 {restaurant.distance}분 내</div>
					<div className={styles.description}>{restaurant.description}</div>
				</article>
			</li>
		);
	}
}

export default RestaurantItem;
