import React, { ChangeEvent, useCallback } from 'react';
import { useLunchDispatch } from '../../hooks';
import { CHANGE_CATEGORY } from '../../store/action';
import { Category } from '../../store/type';
import styles from './SelectorSection.module.css';

function CategorySelector() {
	const dispatch = useLunchDispatch();

	const handleCategorySelector = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		dispatch({ type: CHANGE_CATEGORY, payload: { category: e.target.value as Category } });
	}, []);

	return (
		<select name="category" className={styles.selector} onChange={handleCategorySelector}>
			<option value="전체">전체</option>
			<option value="한식">한식</option>
			<option value="양식">양식</option>
			<option value="일식">일식</option>
			<option value="중식">중식</option>
			<option value="아시안">아시안</option>
			<option value="기타">기타</option>
		</select>
	);
}

export default React.memo(CategorySelector);
