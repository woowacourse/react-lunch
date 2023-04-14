import React, { ChangeEvent } from 'react';
import Store from '../../store';
import styles from './SelectorSection.module.css';
import type { Sort, State } from '../../App';

function SortedSelector() {
	const handleSortedSelector = (store: State | null) => (e: ChangeEvent<HTMLSelectElement>) => {
		store?.setSortState12(e.target.value as Sort);
	};

	return (
		<Store.Consumer>
			{(store) => (
				<select name="sort" className={styles.selector} onChange={handleSortedSelector(store)}>
					<option value="이름순">이름순</option>
					<option value="거리순">거리순</option>
				</select>
			)}
		</Store.Consumer>
	);
}

export default SortedSelector;
