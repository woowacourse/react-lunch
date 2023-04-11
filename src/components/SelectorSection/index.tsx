import React from 'react';
import CategorySelector from './CategorySelector';
import SortedSelector from './SortedSelector';

import styles from './SelectorSection.module.css';

class SelectorSection extends React.Component {
	render() {
		return (
			<section className={styles.section}>
				<CategorySelector />
				<SortedSelector />
			</section>
		);
	}
}

export default SelectorSection;
