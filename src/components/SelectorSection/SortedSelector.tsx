import React from 'react';
import styles from './SelectorSection.module.css';

class SortedSelector extends React.Component {
	render() {
		return (
			<select name='sort' className={styles.selector}>
				<option value='이름순'>이름순</option>
				<option value='거리순'>거리순</option>
			</select>
		);
	}
}

export default SortedSelector;
