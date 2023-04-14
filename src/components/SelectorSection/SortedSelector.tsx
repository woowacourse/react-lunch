import React, { useContext } from 'react';
import Store from '../../store';
import styles from './SelectorSection.module.css';
import type { Sort } from '../../App';
import type { ChangeEvent } from 'react';

function SortedSelector() {
	const { setSortOption } = useContext(Store);

	const handleSortedSelector = (e: ChangeEvent<HTMLSelectElement>) => {
		setSortOption(e.target.value as Sort);
	};

	return (
		<select name="sort" className={styles.selector} onChange={handleSortedSelector}>
			<option value="이름순">이름순</option>
			<option value="거리순">거리순</option>
		</select>
	);
}

export default SortedSelector;
