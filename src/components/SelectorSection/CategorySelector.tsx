import React, { ChangeEvent } from 'react';
import Store from '../../store';
import { Category } from '../RestaurantItem/type';
import styles from './SelectorSection.module.css';
import type { State } from '../../App';

class CategorySelector extends React.Component {
	private static handleCategorySelector = (store: State | null) => (e: ChangeEvent<HTMLSelectElement>) => {
		store?.setCategory(e.target.value as Category);
	};

	render() {
		return (
			<Store.Consumer>
				{(store) => (
					<select name="category" className={styles.selector} onChange={CategorySelector.handleCategorySelector(store)}>
						<option value="전체">전체</option>
						<option value="한식">한식</option>
						<option value="양식">양식</option>
						<option value="일식">일식</option>
						<option value="중식">중식</option>
						<option value="아시안">아시안</option>
						<option value="기타">기타</option>
					</select>
				)}
			</Store.Consumer>
		);
	}
}

export default CategorySelector;
