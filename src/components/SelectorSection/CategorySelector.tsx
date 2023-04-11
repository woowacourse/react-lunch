import React from 'react';
import styles from './SelectorSection.module.css';

class CategorySelector extends React.Component {
	render() {
		return (
			<select name='category' className={styles.selector}>
				<option value='전체'>전체</option>
				<option value='한식'>한식</option>
				<option value='양식'>양식</option>
				<option value='중식'>중식</option>
				<option value='아시안'>아시안</option>
				<option value='기타'>기타</option>
			</select>
		);
	}
}

export default CategorySelector;
