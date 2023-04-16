import React, { ChangeEvent } from 'react';
import { useLunchDispatch } from '../../hooks';
import { CHANGE_SORT_STATE } from '../../store/action';
import { Sort } from '../../store/type';

import styles from './SelectorSection.module.css';

function SortedSelector() {
	const dispatch = useLunchDispatch();

	const handleSortedSelector = (e: ChangeEvent<HTMLSelectElement>) => {
		dispatch({ type: CHANGE_SORT_STATE, payload: { sort: e.target.value as Sort } });
	};

	return (
		<select name="sort" className={styles.selector} onChange={handleSortedSelector}>
			<option value="이름순">이름순</option>
			<option value="거리순">거리순</option>
		</select>
	);
}

export default SortedSelector;
