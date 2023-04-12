import React, { ChangeEvent } from 'react';
import { State } from '../../App';
import Store from '../../store';
import { category } from '../RestaurantItem/type';
import styles from './SelectorSection.module.css';

class CategorySelector extends React.Component {
	handleCategorySelector = (store: State | null) => (e: ChangeEvent<HTMLSelectElement>) => {
		store?.setCategory(e.target.value as category);
	};

	render() {
		return (
			<Store.Consumer>
				{(store) => (
					<select name='category' className={styles.selector} onChange={this.handleCategorySelector(store)}>
						<option value='전체'>전체</option>
						<option value='한식'>한식</option>
						<option value='양식'>양식</option>
						<option value='중식'>중식</option>
						<option value='아시안'>아시안</option>
						<option value='기타'>기타</option>
					</select>
				)}
			</Store.Consumer>
		);
	}
}

export default CategorySelector;
